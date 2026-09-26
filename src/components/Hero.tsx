import { CheckCircle2, MapPin, Wrench } from 'lucide-react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl } from '../utils/contact'

export function Hero() {
  const business = useBusinessConfig()
  const { openEnquiry } = useEnquiry()

  return (
    <section
      id="home"
      className="border-b border-gray-800/80 bg-panel pt-10 pb-12 md:pt-14 md:pb-16"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center md:text-left">
        <p className="text-sm text-gray-400 mb-3">
          Meethapur Chowk · Molar Band · New Delhi
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug tracking-tight">
          Pizza Oven Repair & Spare Parts
        </h1>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Repair, servicing and spare-parts help for commercial gas pizza ovens
          and kitchen equipment.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button
            type="button"
            onClick={() => openEnquiry('booking', 'Pizza Oven Repair Request')}
            className="px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm min-h-12 inline-flex items-center justify-center gap-2"
          >
            <Wrench className="w-4 h-4" aria-hidden />
            Book a Repair
          </button>
          <a
            href={getDirectionsUrl(business)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-600 text-gray-200 font-medium text-sm min-h-12 inline-flex items-center justify-center gap-2 hover:bg-gray-800/50"
          >
            <MapPin className="w-4 h-4 text-orange-400" aria-hidden />
            Get Directions
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start text-sm text-gray-400">
          {business.trustBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" aria-hidden />
              {badge}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-gray-500 border-t border-gray-800 pt-5">
          <span className="text-gray-400">{business.address.landmark}, </span>
          {business.address.area} · {business.openingHours}
        </p>
      </div>
    </section>
  )
}
