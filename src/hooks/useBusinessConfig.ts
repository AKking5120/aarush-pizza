import { useSiteData } from '../context/SiteDataContext'

/** Live business config (Supabase overrides + static defaults). */
export function useBusinessConfig() {
  return useSiteData().business
}
