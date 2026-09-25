import { ExternalLink, Sparkles } from 'lucide-react'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getGoogleReviewsUrl } from '../utils/contact'

export function ReviewSection() {
  const business = useBusinessConfig()
  return (
    <section
      id="reviews"
      className="py-16 bg-ink border-t border-gray-800"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-panel border border-gray-800 rounded-2xl p-8 sm:p-10 space-y-6 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" aria-hidden /> Customer Feedback
          </div>

          <h2
            id="reviews-heading"
            className="text-2xl sm:text-3xl font-extrabold text-white"
          >
            See Our Reviews on Google
          </h2>

          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            We value transparent customer feedback. Visit our Google business
            listing to check location reviews or leave your feedback after a
            service.
          </p>

          <a
            href={getGoogleReviewsUrl(business)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold text-sm transition-all min-h-12"
          >
            View on Google Maps
            <ExternalLink className="w-4 h-4 text-orange-400" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
