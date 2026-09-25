import { Info } from 'lucide-react'
import { useBusinessConfig } from '../hooks/useBusinessConfig'

export function About() {
  const business = useBusinessConfig()
  return (
    <section
      id="about"
      className="py-16 bg-ink border-t border-gray-800/60"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-panel border border-gray-800 rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl pointer-events-none"
            aria-hidden
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Info className="w-4 h-4" aria-hidden /> About Aarush Repairs
            </div>

            <h2
              id="about-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Your Local Pizza Oven Repair & Spare Parts Specialist
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              <strong className="text-white">{business.businessName}</strong>{' '}
              provides dedicated repair, maintenance, and spare-parts sourcing
              for commercial gas pizza ovens and specialized kitchen equipment
              in New Delhi.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Whether your establishment operates a deck oven, conveyor pizza
              oven, or custom gas baking setup, our workshop at Meethapur Chowk
              offers practical technical assistance, temperature issue
              diagnosis, gas line component checks, and replacement burner
              parts.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-panel-elevated px-4 py-3 rounded-xl border border-gray-800">
                <div className="text-orange-400 font-bold text-lg">
                  Local Delhi Service
                </div>
                <div className="text-xs text-gray-400">
                  Conveniently located at Meethapur Chowk
                </div>
              </div>
              <div className="bg-panel-elevated px-4 py-3 rounded-xl border border-gray-800">
                <div className="text-orange-400 font-bold text-lg">
                  Parts Sourcing
                </div>
                <div className="text-xs text-gray-400">
                  Burners, valves, knobs & heating sensors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
