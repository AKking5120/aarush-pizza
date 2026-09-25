import { useSiteData } from '../context/SiteDataContext'
import { ServiceCard } from './ServiceCard'

export function Services() {
  const { services } = useSiteData()
  return (
    <section
      id="services"
      className="py-20 bg-panel border-t border-gray-800"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Our Expertise
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Comprehensive Oven Services
          </h2>
          <p className="text-gray-400 text-sm">
            Tailored servicing and technical solutions to keep your commercial
            pizza baking uninterrupted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
