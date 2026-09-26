import { useMemo, useState } from 'react'
import {
  sparePartFilterCategories,
  type SparePartCategory,
} from '../config/spareParts'
import { useSiteData } from '../context/SiteDataContext'
import { SparePartCard } from './SparePartCard'

export function SpareParts() {
  const { spareParts } = useSiteData()
  const [activeCategory, setActiveCategory] = useState<SparePartCategory>('All')

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? spareParts
        : spareParts.filter((item) => item.category === activeCategory),
    [activeCategory, spareParts],
  )

  return (
    <section
      id="spare-parts"
      className="py-12 bg-ink border-t border-gray-800"
      aria-labelledby="spare-parts-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="spare-parts-heading" className="text-2xl font-bold text-white">
          Spare parts
        </h2>
        <p className="mt-2 text-sm text-gray-400 mb-6">
          Enquire for availability and fitment. No online prices.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {sparePartFilterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium min-h-9 ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white'
                  : 'bg-panel text-gray-400 border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((part) => (
            <SparePartCard key={part.id} part={part} />
          ))}
        </div>
      </div>
    </section>
  )
}
