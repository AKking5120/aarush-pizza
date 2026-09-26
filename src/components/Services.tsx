import { useSiteData } from '../context/SiteDataContext'
import { ServiceCard } from './ServiceCard'

export function Services() {
  const { services } = useSiteData()

  return (
    <section
      id="services"
      className="py-12 bg-panel border-t border-gray-800"
      aria-labelledby="services-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="services-heading" className="text-2xl font-bold text-white">
          Services
        </h2>
        <p className="mt-2 text-sm text-gray-400 mb-8">
          Repair and support for commercial pizza ovens.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
