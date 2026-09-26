import type { ServiceItem } from '../config/services'
import { useEnquiry } from '../context/EnquiryContext'

type ServiceCardProps = {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  const { openEnquiry } = useEnquiry()

  return (
    <article
      className="border border-gray-800 rounded-lg p-5 flex flex-col h-full bg-panel"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center text-orange-400 shrink-0">
          <Icon className="w-5 h-5" aria-hidden />
        </div>
        <h3 className="text-base font-semibold text-white pt-1.5">
          {service.title}
        </h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      <button
        type="button"
        onClick={() => openEnquiry('service', service.title)}
        className="mt-4 text-sm font-medium text-orange-400 hover:text-orange-300 text-left min-h-10"
      >
        Enquire →
      </button>
    </article>
  )
}
