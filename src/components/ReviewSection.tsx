import { ExternalLink } from 'lucide-react'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { getGoogleReviewsUrl } from '../utils/contact'

export function ReviewSection() {
  const business = useBusinessConfig()
  return (
    <section
      id="reviews"
      className="py-10 bg-panel border-t border-gray-800"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 id="reviews-heading" className="text-lg font-semibold text-white">
          Google reviews
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          See feedback on our Google listing.
        </p>
        <a
          href={getGoogleReviewsUrl(business)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 min-h-11"
        >
          View on Google
          <ExternalLink className="w-4 h-4" aria-hidden />
        </a>
      </div>
    </section>
  )
}
