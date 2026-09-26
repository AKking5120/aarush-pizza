import { MapPin, Menu, Wrench, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl } from '../utils/contact'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#spare-parts', label: 'Parts' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Contact' },
]

export function Navbar() {
  const business = useBusinessConfig()
  const [open, setOpen] = useState(false)
  const { openEnquiry } = useEnquiry()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-ink border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between min-h-[4.25rem] py-2">
          <a href="#home" className="min-w-0 group">
            <span
              className="block text-2xl sm:text-[1.75rem] font-bold font-brand tracking-tight text-amber-400 group-hover:text-orange-300 transition-colors leading-none"
            >
              {business.brandName}
            </span>
            <span className="hidden sm:block text-xs text-orange-200/70 font-medium leading-snug mt-1">
              {business.navSubtitle}
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-6 text-sm text-gray-300"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => openEnquiry('booking', 'Oven Repair Request')}
              className="px-3 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium min-h-10"
            >
              Book repair
            </button>
            <a
              href={getDirectionsUrl(business)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm min-h-10 inline-flex items-center gap-1"
            >
              <MapPin className="w-4 h-4" aria-hidden />
              Map
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300 min-h-11 min-w-11 flex items-center justify-center"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-panel px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-200 text-base"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              openEnquiry('booking', 'Oven Repair Request')
            }}
            className="mt-2 w-full py-3 rounded-lg bg-orange-600 text-white font-medium flex items-center justify-center gap-2"
          >
            <Wrench className="w-4 h-4" aria-hidden />
            Book repair
          </button>
        </div>
      )}
    </header>
  )
}
