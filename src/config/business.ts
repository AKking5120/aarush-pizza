export type SocialLinks = {
  facebook?: string
  instagram?: string
  youtube?: string
  linkedin?: string
}

const MAPS_QUERY =
  'Meethapur+Chowk+Nagar+Market+Harsh+Vihar+Molar+Band+New+Delhi+110044'

export const businessConfig = {
  businessName: 'Aarush Gas Pizza Oven Repair and Spare Parts',
  brandName: 'AARUSH',
  tagline: 'Gas Pizza Oven Repair & Spare Parts Specialist',
  navSubtitle: 'Oven Repair & Spare Parts',

  address: {
    shopNo: 'Shop No. 9',
    landmark: 'Meethapur Chowk, Nagar Market',
    area: 'Harsh Vihar, Molar Band',
    cityStatePincode: 'New Delhi, Delhi 110044',
    country: 'India',
    line1: 'Shop No. 9, Meethapur Chowk, Nagar Market',
    line2: 'Harsh Vihar, Molar Band',
    city: 'New Delhi',
    state: 'Delhi',
    postalCode: '110044',
  },

  /** TODO: Add verified phone (display + tel link) */
  phone: '',

  /** TODO: Add WhatsApp digits only, e.g. 919876543210 */
  whatsapp: '',

  googleMapsUrl:
    `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,

  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Meethapur%20Chowk,%20Nagar%20Market,%20Harsh%20Vihar,%20Molar%20Band,%20New%20Delhi,%20Delhi%20110044&t=&z=15&ie=UTF8&iwloc=&output=embed',

  /** TODO: Replace with verified hours when confirmed */
  openingHours:
    'Mon - Sat: 9:00 AM - 8:00 PM (Subject to confirmation)',

  trustBadges: [
    'Professional Service',
    'Spare Parts Available',
    'Local Service in Delhi',
    'Customer Support',
  ],

  socialLinks: {
    facebook: '',
    instagram: '',
    youtube: '',
    linkedin: '',
  } satisfies SocialLinks,
}

export function getFullAddress(): string {
  const { address } = businessConfig
  return `${address.shopNo}, ${address.landmark}, ${address.area}, ${address.cityStatePincode}, ${address.country}`
}

export function getAddressLines(): string[] {
  const { address } = businessConfig
  return [
    businessConfig.businessName,
    address.shopNo,
    address.landmark,
    address.area,
    address.cityStatePincode,
  ]
}
