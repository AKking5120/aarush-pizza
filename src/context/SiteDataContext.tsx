import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { businessConfig as staticBusiness } from '../config/business'
import { galleryImages as staticGallery } from '../config/gallery'
import { services as staticServices } from '../config/services'
import { spareParts as staticSpareParts } from '../config/spareParts'
import { getServiceIcon } from '../lib/serviceIcons'
import { getSupabase, isSupabaseConfigured } from '../lib/supabase'
import type {
  BusinessSettingsPatch,
  DbGalleryItem,
  DbService,
  DbSparePart,
} from '../types/cms'
import type { ServiceItem } from '../config/services'
import type { SparePartItem } from '../config/spareParts'
import type { GalleryImage } from '../config/gallery'

type SiteBusiness = typeof staticBusiness & BusinessSettingsPatch

type SiteDataContextValue = {
  business: SiteBusiness
  services: ServiceItem[]
  spareParts: SparePartItem[]
  gallery: GalleryImage[]
  loading: boolean
  fromDatabase: boolean
  refresh: () => Promise<void>
}

const SiteDataContext = createContext<SiteDataContextValue | null>(null)

function mapServices(rows: DbService[]): ServiceItem[] {
  return rows
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      icon: getServiceIcon(row.icon),
      popular: row.popular,
    }))
}

function mapSpareParts(rows: DbSparePart[]): SparePartItem[] {
  return rows
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((row) => ({
      id: row.id,
      name: row.name,
      category: row.category as SparePartItem['category'],
      description: row.description,
      compatible: row.compatible,
      imageSrc: row.image_src,
      imageAlt: row.image_alt,
    }))
}

function mapGallery(rows: DbGalleryItem[]): GalleryImage[] {
  return rows
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((row) => ({
      id: row.id,
      title: row.title,
      category: row.category as GalleryImage['category'],
      src: row.src,
      caption: row.caption,
      alt: row.alt,
    }))
}

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [business, setBusiness] = useState<SiteBusiness>(staticBusiness)
  const [services, setServices] = useState<ServiceItem[]>(staticServices)
  const [spareParts, setSpareParts] = useState<SparePartItem[]>(staticSpareParts)
  const [gallery, setGallery] = useState<GalleryImage[]>(staticGallery)
  const [loading, setLoading] = useState(isSupabaseConfigured)
  const [fromDatabase, setFromDatabase] = useState(false)

  const refresh = useCallback(async () => {
    const supabase = getSupabase()
    if (!supabase) {
      setLoading(false)
      return
    }

    setLoading(true)
    try {
      const [settingsRes, servicesRes, partsRes, galleryRes] = await Promise.all([
        supabase.from('business_settings').select('data').eq('id', 1).maybeSingle(),
        supabase.from('services').select('*'),
        supabase.from('spare_parts').select('*'),
        supabase.from('gallery_items').select('*'),
      ])

      const patch = (settingsRes.data?.data ?? {}) as BusinessSettingsPatch
      setBusiness({
        ...staticBusiness,
        phone: patch.phone ?? staticBusiness.phone,
        whatsapp: patch.whatsapp ?? staticBusiness.whatsapp,
        openingHours: patch.openingHours ?? staticBusiness.openingHours,
        googleMapsUrl: patch.googleMapsUrl ?? staticBusiness.googleMapsUrl,
        googleMapsEmbedUrl:
          patch.googleMapsEmbedUrl ?? staticBusiness.googleMapsEmbedUrl,
      })

      if (servicesRes.data?.length) {
        setServices(mapServices(servicesRes.data as DbService[]))
      }
      if (partsRes.data?.length) {
        setSpareParts(mapSpareParts(partsRes.data as DbSparePart[]))
      }
      if (galleryRes.data?.length) {
        setGallery(mapGallery(galleryRes.data as DbGalleryItem[]))
      }

      setFromDatabase(
        Boolean(
          servicesRes.data?.length ||
            partsRes.data?.length ||
            galleryRes.data?.length ||
            settingsRes.data,
        ),
      )
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const value = useMemo(
    () => ({
      business,
      services,
      spareParts,
      gallery,
      loading,
      fromDatabase,
      refresh,
    }),
    [business, services, spareParts, gallery, loading, fromDatabase, refresh],
  )

  return (
    <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>
  )
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext)
  if (!ctx) {
    throw new Error('useSiteData must be used within SiteDataProvider')
  }
  return ctx
}
