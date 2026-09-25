import { Filter, Info } from 'lucide-react'
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
    [activeCategory],
  )

  return (
    <section
      id="spare-parts"
      className="py-20 bg-ink border-t border-gray-800"
      aria-labelledby="spare-parts-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
              Inventory Sourcing
            </p>
            <h2
              id="spare-parts-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white"
            >
              Pizza Oven Spare Parts
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Browse commonly required components for commercial gas pizza ovens.
              Contact us for availability and compatibility checks.
            </p>
          </div>

          <div className="text-xs text-gray-400 bg-panel p-3 rounded-lg border border-gray-800 flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400 shrink-0" aria-hidden />
            Exact availability & specifications subject to direct shop inquiry.
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" aria-hidden /> Filter:
          </span>
          {sparePartFilterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all min-h-10 ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                  : 'bg-panel text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((part) => (
            <SparePartCard key={part.id} part={part} />
          ))}
        </div>
      </div>
    </section>
  )
}
