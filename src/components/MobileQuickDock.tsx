import { MapPin, Wrench } from 'lucide-react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl } from '../utils/contact'

export function MobileQuickDock() {
  const business = useBusinessConfig()
  const { openEnquiry } = useEnquiry()

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-panel/95 backdrop-blur-md border-t border-gray-800 p-2.5 px-4 shadow-2xl"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => openEnquiry('booking', 'Mobile Oven Service Request')}
          className="w-full py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-orange-600/30 min-h-12"
        >
          <Wrench className="w-4 h-4" aria-hidden />
          Book Repair
        </button>
        <a
          href={getDirectionsUrl(business)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 font-bold text-xs flex items-center justify-center gap-1.5 min-h-12"
        >
          <MapPin className="w-4 h-4 text-orange-400" aria-hidden />
          Get Directions
        </a>
      </div>
    </div>
  )
}
