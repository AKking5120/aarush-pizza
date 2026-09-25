export type BusinessSettingsPatch = {
  phone?: string
  whatsapp?: string
  openingHours?: string
  googleMapsUrl?: string
  googleMapsEmbedUrl?: string
}

export type DbService = {
  id: string
  title: string
  description: string
  icon: string
  popular: boolean
  sort_order: number
}

export type DbSparePart = {
  id: string
  name: string
  category: string
  description: string
  compatible: string
  image_src: string
  image_alt: string
  sort_order: number
}

export type DbGalleryItem = {
  id: number
  title: string
  category: string
  src: string
  caption: string
  alt: string
  sort_order: number
}

export type DbEnquiry = {
  id: string
  subject_type: string | null
  subject_title: string | null
  customer_name: string | null
  customer_phone: string | null
  area: string | null
  oven_type: string | null
  issue: string | null
  created_at: string
}
