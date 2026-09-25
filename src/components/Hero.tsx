import { CheckCircle2, Clock, Flame, MapPin, Wrench } from 'lucide-react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getDirectionsUrl } from '../utils/contact'

const HERO_CARD_IMAGE =
  'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800'

export function Hero() {
  const business = useBusinessConfig()
  const { openEnquiry } = useEnquiry()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-panel via-ink to-ink pt-12 pb-20 lg:pt-20 lg:pb-28"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide uppercase">
              <Flame className="w-3.5 h-3.5 text-orange-500" aria-hidden />
              Commercial Kitchen & Pizza Oven Support
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Expert Pizza Oven Repair &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Spare Parts
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Reliable repair, preventative maintenance, and spare parts
              solutions for commercial gas pizza ovens and kitchen equipment in
              New Delhi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={() =>
                  openEnquiry('booking', 'Pizza Oven Repair Request')
                }
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-base transition-all shadow-lg shadow-orange-600/25 flex items-center justify-center gap-2 min-h-14 group"
              >
                <Wrench
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  aria-hidden
                />
                Book a Repair
              </button>
              <a
                href={getDirectionsUrl(business)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-panel-elevated hover:bg-gray-800 border border-gray-700 text-gray-200 font-semibold text-base transition-all flex items-center justify-center gap-2 min-h-14"
              >
                <MapPin className="w-5 h-5 text-orange-400" aria-hidden />
                Get Directions
              </a>
            </div>

            <div className="pt-6 border-t border-gray-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                {business.trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-orange-500 shrink-0"
                      aria-hidden
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-300">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 opacity-20 blur-lg"
                aria-hidden
              />
              <div className="relative bg-panel border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-6 group">
                  <img
                    src={HERO_CARD_IMAGE}
                    alt="Commercial pizza oven maintenance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={800}
                    height={600}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80"
                    aria-hidden
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2.5 py-1 rounded bg-orange-500/80 text-white text-xs font-semibold uppercase tracking-wide">
                      Delhi Service Hub
                    </span>
                    <h2 className="text-white font-bold text-lg mt-1">
                      Specialized Oven Service
                    </h2>
                  </div>
                </div>

                <div className="space-y-3 bg-panel-elevated p-4 rounded-xl border border-gray-800 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 text-gray-300">
                    <MapPin
                      className="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <div>
                      <span className="font-semibold text-white block">
                        Location:
                      </span>
                      {business.address.landmark},{' '}
                      {business.address.area}, New Delhi
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-300">
                    <Clock
                      className="w-4 h-4 text-orange-400 shrink-0"
                      aria-hidden
                    />
                    <div>
                      <span className="font-semibold text-white">Hours:</span>{' '}
                      {business.openingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
