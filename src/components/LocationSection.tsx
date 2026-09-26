import { Check, Copy, MapPin } from 'lucide-react'
import { useState } from 'react'
import { getFullAddress } from '../config/business'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl } from '../utils/contact'

export function LocationSection() {
  const business = useBusinessConfig()
  const [copied, setCopied] = useState(false)
  const embedUrl = business.googleMapsEmbedUrl.trim()

  const copyAddress = () => {
    void navigator.clipboard.writeText(getFullAddress())
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="location"
      className="py-12 bg-ink border-t border-gray-800"
      aria-labelledby="location-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="location-heading" className="text-2xl font-bold text-white">
          Shop location
        </h2>

        <address className="mt-4 not-italic text-sm text-gray-300 leading-relaxed">
          {business.businessName}<br />
          {business.address.shopNo}, {business.address.landmark}<br />
          {business.address.area}<br />
          {business.address.cityStatePincode}
        </address>

        <p className="mt-3 text-sm text-gray-500">{business.openingHours}</p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={getDirectionsUrl(business)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-orange-400 min-h-11"
          >
            <MapPin className="w-4 h-4" aria-hidden />
            Open in Google Maps
          </a>
          <button
            type="button"
            onClick={copyAddress}
            className="inline-flex items-center gap-2 text-sm text-gray-400 min-h-11"
          >
            {copied ? (
              <Check className="w-4 h-4" aria-hidden />
            ) : (
              <Copy className="w-4 h-4" aria-hidden />
            )}
            {copied ? 'Copied' : 'Copy address'}
          </button>
        </div>

        {embedUrl && (
          <div className="mt-6 rounded-lg overflow-hidden border border-gray-800 h-64 sm:h-80">
            <iframe
              title={`Map — ${business.businessName}`}
              src={embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  )
}
