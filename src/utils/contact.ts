import { businessConfig, getFullAddress } from '../config/business'

type ContactOverrides = {
  phone?: string
  whatsapp?: string
  googleMapsUrl?: string
}

export function getDirectionsUrl(overrides?: ContactOverrides): string {
  const url = overrides?.googleMapsUrl ?? businessConfig.googleMapsUrl
  if (url?.trim()) return url
  const query = encodeURIComponent(getFullAddress())
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

export function getTelHref(phone?: string): string | null {
  const raw = (phone ?? businessConfig.phone).trim()
  if (!raw) return null
  const digits = raw.replace(/[^\d+]/g, '')
  return `tel:${digits}`
}

export function getWhatsAppHref(
  message?: string,
  whatsapp?: string,
  phone?: string,
): string | null {
  const raw =
    (whatsapp ?? businessConfig.whatsapp).trim() ||
    (phone ?? businessConfig.phone).trim()
  if (!raw) return null
  const digits = raw.replace(/\D/g, '')
  const base = `https://wa.me/${digits}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function getGoogleReviewsUrl(overrides?: ContactOverrides): string {
  return getDirectionsUrl(overrides)
}
