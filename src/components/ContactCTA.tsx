import { Flame, MapPin, MessageCircle, Phone, Wrench } from 'lucide-react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl, getTelHref, getWhatsAppHref } from '../utils/contact'

export function ContactCTA() {
  const business = useBusinessConfig()
  const { openEnquiry } = useEnquiry()
  const tel = getTelHref(business.phone)
  const wa = getWhatsAppHref(
    'Hello, I need help with pizza oven repair or spare parts.',
    business.whatsapp,
    business.phone,
  )

  return (
    <>
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-panel to-ink border-t border-gray-800"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-panel-elevated border border-orange-500/30 rounded-3xl p-8 sm:p-14 space-y-6 shadow-2xl relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden
            />

            <div className="w-16 h-16 rounded-2xl bg-orange-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-orange-600/30">
              <Flame className="w-8 h-8" aria-hidden />
            </div>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            >
              Keep Your Pizza Oven Running Smoothly
            </h2>

            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Contact Aarush for pizza oven repair, burner maintenance, or
              spare-parts inquiries in New Delhi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() =>
                  openEnquiry('booking', 'Pizza Oven Repair Request')
                }
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-base shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2 min-h-14"
              >
                <Wrench className="w-5 h-5" aria-hidden />
                Book Repair Request
              </button>
              {tel && (
                <a
                  href={tel}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold text-base transition-all flex items-center justify-center gap-2 min-h-14"
                >
                  <Phone className="w-5 h-5 text-orange-400" aria-hidden />
                  Call Now
                </a>
              )}
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-base transition-all flex items-center justify-center gap-2 min-h-14"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden />
                  WhatsApp
                </a>
              )}
              <a
                href={getDirectionsUrl(business)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold text-base transition-all flex items-center justify-center gap-2 min-h-14"
              >
                <MapPin className="w-5 h-5 text-orange-400" aria-hidden />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
