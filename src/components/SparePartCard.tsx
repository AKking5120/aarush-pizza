import type { SparePartItem } from '../config/spareParts'
import { useEnquiry } from '../context/EnquiryContext'

type SparePartCardProps = {
  part: SparePartItem
}

export function SparePartCard({ part }: SparePartCardProps) {
  const { openEnquiry } = useEnquiry()

  return (
    <article className="border border-gray-800 rounded-lg overflow-hidden bg-panel flex flex-col">
      <img
        src={part.imageSrc}
        alt={part.imageAlt}
        className="h-40 w-full object-cover"
        width={400}
        height={300}
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] uppercase text-gray-500">{part.category}</p>
        <h3 className="font-semibold text-white text-sm mt-1">{part.name}</h3>
        <p className="text-xs text-gray-400 mt-2 flex-1">{part.description}</p>
        <button
          type="button"
          onClick={() => openEnquiry('part', part.name)}
          className="mt-3 text-sm text-orange-400 font-medium text-left min-h-10"
        >
          Enquire now
        </button>
      </div>
    </article>
  )
}
