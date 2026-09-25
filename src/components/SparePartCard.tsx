import { MessageSquare } from 'lucide-react'
import type { SparePartItem } from '../config/spareParts'
import { useEnquiry } from '../context/EnquiryContext'

type SparePartCardProps = {
  part: SparePartItem
}

export function SparePartCard({ part }: SparePartCardProps) {
  const { openEnquiry } = useEnquiry()

  return (
    <article
      className="bg-panel border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all group flex flex-col justify-between h-full"
    >
      <div>
        <div className="relative h-48 overflow-hidden bg-gray-900">
          <img
            src={part.imageSrc}
            alt={part.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={600}
            height={400}
            loading="lazy"
          />
          <span className="absolute top-3 right-3 bg-ink/80 backdrop-blur-md border border-gray-700 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded">
            {part.category}
          </span>
        </div>

        <div className="p-5 space-y-3">
          <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
            {part.name}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            {part.description}
          </p>
          <p className="text-[11px] text-gray-500 font-medium">
            <span className="text-gray-400 font-semibold">Suitable for:</span>{' '}
            {part.compatible}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          type="button"
          onClick={() => openEnquiry('part', part.name)}
          className="w-full py-2.5 rounded-lg bg-orange-600/10 hover:bg-orange-600 border border-orange-500/30 text-orange-400 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 min-h-11"
        >
          <MessageSquare className="w-3.5 h-3.5" aria-hidden />
          Enquire Now
        </button>
      </div>
    </article>
  )
}
