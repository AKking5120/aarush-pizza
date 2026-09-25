import { ChevronRight } from 'lucide-react'
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
      className="group bg-panel-elevated hover:bg-[#252b35] border border-gray-800 hover:border-orange-500/40 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-orange-500/5 h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6" aria-hidden />
          </div>
          {service.popular && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
              Frequent Request
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => openEnquiry('service', service.title)}
        className="w-full py-2.5 px-3 rounded-lg bg-gray-800 group-hover:bg-orange-600 text-gray-300 group-hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 min-h-11"
      >
        Enquire Service
        <ChevronRight className="w-3.5 h-3.5" aria-hidden />
      </button>
    </article>
  )
}
