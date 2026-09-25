import { FileText, Flame } from 'lucide-react'
import { useState } from 'react'
import { getFullAddress } from '../config/business'
import { useBusinessConfig } from '../hooks/useBusinessConfig'

const footerLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#spare-parts', label: 'Spare Parts' },
  { href: '#process', label: 'Repair Process' },
  { href: '#gallery', label: 'Gallery' },
]

function getSchemaPreview(business: ReturnType<typeof useBusinessConfig>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.businessName,
    description:
      'Professional gas pizza oven repair, maintenance, and spare-parts solutions in New Delhi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.shopNo}, ${business.address.landmark}`,
      addressLocality: business.address.area,
      addressRegion: 'Delhi',
      postalCode: '110044',
      addressCountry: 'IN',
    },
    ...(business.phone ? { telephone: business.phone } : {}),
  }
}

export function Footer() {
  const business = useBusinessConfig()
  const [schemaOpen, setSchemaOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0c0f] border-t border-gray-800 text-gray-400 text-xs py-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold">
                <Flame className="w-5 h-5" aria-hidden />
              </div>
              <span className="text-lg font-bold text-white">
                {business.businessName}
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              Dedicated commercial pizza oven repair and spare parts support at
              Meethapur Chowk, New Delhi.
            </p>
            <p className="text-gray-500 text-xs">{getFullAddress()}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white font-bold text-xs uppercase tracking-wider">
              Quick Navigation
            </h2>
            <ul className="space-y-1.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-orange-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-white font-bold text-xs uppercase tracking-wider">
              Local area
            </h2>
            <p className="text-gray-400 text-xs">
              Servicing Molar Band, Harsh Vihar, Meethapur & nearby New Delhi
              locations.
            </p>
            <button
              type="button"
              onClick={() => setSchemaOpen(!schemaOpen)}
              className="mt-2 text-orange-400 hover:underline text-[11px] font-semibold flex items-center gap-1 min-h-10"
            >
              <FileText className="w-3 h-3" aria-hidden />
              {schemaOpen
                ? 'Hide structured data'
                : 'View Local Business JSON-LD schema'}
            </button>
          </div>
        </div>

        {schemaOpen && (
          <div className="bg-panel border border-gray-800 rounded-xl p-4 text-[11px] font-mono text-gray-300 overflow-x-auto">
            <pre>{JSON.stringify(getSchemaPreview(business), null, 2)}</pre>
          </div>
        )}

        <div className="pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {year} {business.businessName}. All rights reserved.
          </div>
          <div className="text-gray-500">
            Delhi commercial kitchen equipment support
          </div>
        </div>
      </div>
    </footer>
  )
}
