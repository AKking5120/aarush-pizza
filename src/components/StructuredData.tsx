import { useBusinessConfig } from '../hooks/useBusinessConfig'

export function StructuredData() {
  const business = useBusinessConfig()

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.businessName,
    description:
      'Professional pizza oven repair, servicing and spare-parts enquiries in Meethapur, Molar Band, New Delhi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.shopNo}, ${business.address.landmark}`,
      addressLocality: business.address.area,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
  }

  if (business.phone) {
    data.telephone = business.phone
  }

  if (business.googleMapsUrl) {
    data.url = business.googleMapsUrl
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
