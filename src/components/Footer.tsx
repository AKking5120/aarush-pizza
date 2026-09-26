import { getFullAddress } from '../config/business'
import { useBusinessConfig } from '../hooks/useBusinessConfig'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#spare-parts', label: 'Parts' },
  { href: '#location', label: 'Contact' },
]

export function Footer() {
  const business = useBusinessConfig()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-[#0a0c0f] text-gray-500 text-xs py-8 pb-22 lg:pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between gap-6">
        <div>
          <p className="font-semibold text-gray-300">{business.brandName}</p>
          <p className="mt-1 max-w-xs leading-relaxed">{getFullAddress()}</p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gray-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 text-center sm:text-left">
        © {year} {business.businessName}
      </p>
    </footer>
  )
}
