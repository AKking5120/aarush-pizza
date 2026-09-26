import { Phone } from 'lucide-react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl, getTelHref } from '../utils/contact'

export function MobileQuickDock() {
  const business = useBusinessConfig()
  const { openEnquiry } = useEnquiry()
  const tel = getTelHref(business.phone)

  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-gray-800 bg-ink/95 p-2"
      aria-label="Quick actions"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => openEnquiry('booking', 'Repair enquiry')}
          className="py-3 rounded-lg bg-orange-600 text-white text-sm font-medium min-h-11"
        >
          Enquire
        </button>
        {tel ? (
          <a
            href={tel}
            className="py-3 rounded-lg border border-gray-700 text-gray-200 text-sm font-medium min-h-11 flex items-center justify-center gap-1"
          >
            <Phone className="w-4 h-4" aria-hidden />
            Call
          </a>
        ) : (
          <a
            href={getDirectionsUrl(business)}
            className="py-3 rounded-lg border border-gray-700 text-gray-200 text-sm font-medium min-h-11 flex items-center justify-center"
          >
            Map
          </a>
        )}
      </div>
    </div>
  )
}
