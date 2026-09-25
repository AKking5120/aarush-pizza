import { Check, Clock, Copy, ExternalLink, MapPin } from 'lucide-react'
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
      className="py-20 bg-panel border-t border-gray-800"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                Visit Our Workshop
              </p>
              <h2
                id="location-heading"
                className="text-3xl font-extrabold text-white mt-1"
              >
                Shop Address
              </h2>
            </div>

            <address className="bg-panel-elevated p-6 rounded-xl border border-gray-800 space-y-4 not-italic">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-6 h-6 text-orange-500 shrink-0 mt-1"
                  aria-hidden
                />
                <div>
                  <h3 className="font-bold text-white text-base">
                    {business.businessName}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                    {business.address.shopNo},<br />
                    {business.address.landmark},<br />
                    {business.address.area},<br />
                    {business.address.cityStatePincode}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800 flex items-center justify-between gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={copyAddress}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 min-h-10"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5" aria-hidden />
                  ) : (
                    <Copy className="w-3.5 h-3.5" aria-hidden />
                  )}
                  {copied ? 'Address copied!' : 'Copy address'}
                </button>

                <a
                  href={getDirectionsUrl(business)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1 min-h-10"
                >
                  Directions{' '}
                  <ExternalLink className="w-3 h-3 text-orange-400" aria-hidden />
                </a>
              </div>
            </address>

            <div className="bg-panel-elevated p-6 rounded-xl border border-gray-800 space-y-3">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" aria-hidden /> Working
                Hours
              </h3>
              <p className="text-gray-300 text-xs">{business.openingHours}</p>
            </div>
          </div>

          <div className="lg:col-span-7 h-96 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative bg-gray-900">
            {embedUrl ? (
              <iframe
                title={`Map showing ${business.businessName}`}
                src={embedUrl}
                width="100%"
                height="100%"
                className="brightness-90 contrast-125 grayscale-[20%] border-0 min-h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full min-h-96 items-center justify-center p-8 text-center text-gray-400 text-sm">
                Map embed URL not set in business config.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
