import { MapPin, MessageCircle, Phone, Wrench } from 'lucide-react'
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
    <section
      id="contact"
      className="py-12 bg-ink border-t border-gray-800"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="contact-heading"
          className="text-2xl font-bold text-white"
        >
          Need repair or spare parts?
        </h2>
        <p className="mt-2 text-gray-400 text-sm">
          Contact Aarush at Meethapur Chowk or send an enquiry online.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => openEnquiry('booking', 'Pizza Oven Repair Request')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold text-sm min-h-12 inline-flex items-center justify-center gap-2"
          >
            <Wrench className="w-4 h-4" aria-hidden />
            Book repair
          </button>
          {tel && (
            <a
              href={tel}
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-700 text-gray-200 text-sm min-h-12 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" aria-hidden />
              Call
            </a>
          )}
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-700 text-gray-200 text-sm min-h-12 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden />
              WhatsApp
            </a>
          )}
          <a
            href={getDirectionsUrl(business)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-700 text-gray-200 text-sm min-h-12 inline-flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" aria-hidden />
            Directions
          </a>
        </div>
      </div>
    </section>
  )
}
