import { useBusinessConfig } from '../hooks/useBusinessConfig'

export function About() {
  const business = useBusinessConfig()
  return (
    <section
      id="about"
      className="py-12 bg-ink border-t border-gray-800/60"
      aria-labelledby="about-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2
          id="about-heading"
          className="text-2xl font-bold text-white"
        >
          About us
        </h2>

        <p className="mt-4 text-gray-300 leading-relaxed">
          <strong className="text-white font-medium">{business.businessName}</strong>{' '}
          offers pizza oven repair, maintenance, and spare parts at Meethapur
          Chowk, New Delhi — for deck ovens, conveyor ovens, and related
          commercial kitchen equipment.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-gray-400">
          <li>• Local shop at Nagar Market, Harsh Vihar / Molar Band</li>
          <li>• Burners, valves, knobs, sensors and other parts on enquiry</li>
          <li>• Clear communication before repair or replacement</li>
        </ul>
      </div>
    </section>
  )
}
