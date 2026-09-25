import { Flame, MapPin, Menu, Wrench, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl } from '../utils/contact'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#spare-parts', label: 'Spare Parts' },
  { href: '#process', label: 'Process' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Location' },
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
    <header className="sticky top-0 z-40 bg-ink/90 backdrop-blur-md border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group min-w-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Flame className="w-6 h-6 fill-amber-100" aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                {business.brandName}
                <span
                  className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse"
                  aria-hidden
                />
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-gray-400 tracking-wider uppercase truncate">
                {business.navSubtitle}
              </div>
            </div>
          </a>

          <nav
            className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => openEnquiry('booking', 'Oven Repair Request')}
              className="px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-md shadow-orange-600/20 active:scale-95 flex items-center gap-2 min-h-11"
            >
              <Wrench className="w-4 h-4" aria-hidden />
              Book Repair
            </button>
            <a
              href={getDirectionsUrl(business)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 font-medium text-sm transition-all flex items-center gap-1.5 min-h-11"
            >
              <MapPin className="w-4 h-4 text-orange-400" aria-hidden />
              Directions
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 min-h-12 min-w-12 flex items-center justify-center"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-panel border-b border-gray-800 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-orange-400 min-h-12"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                openEnquiry('booking', 'Oven Repair Request')
              }}
              className="w-full py-2.5 rounded-lg bg-orange-600 text-white font-semibold text-sm min-h-12"
            >
              Book Repair
            </button>
            <a
              href={getDirectionsUrl(business)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 font-semibold text-sm flex items-center justify-center gap-1 min-h-12"
            >
              <MapPin className="w-4 h-4 text-orange-400" aria-hidden />
              Directions
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
