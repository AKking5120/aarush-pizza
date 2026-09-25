import { Maximize2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  galleryFilterCategories,
  type GalleryFilterCategory,
  type GalleryImage,
} from '../config/gallery'
import { useSiteData } from '../context/SiteDataContext'

export function Gallery() {
  const { gallery: galleryImages } = useSiteData()
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilterCategory>('All')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  return (
    <section
      id="gallery"
      className="py-20 bg-panel border-t border-gray-800"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
              Visual Overview
            </p>
            <h2
              id="gallery-heading"
              className="text-3xl font-extrabold text-white"
            >
              Service & Parts Gallery
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {galleryFilterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all min-h-10 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-orange-600 text-white'
                    : 'bg-panel-elevated text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group relative h-64 w-full rounded-xl overflow-hidden border border-gray-800 bg-gray-900 text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={600}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                  aria-hidden
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-base mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-orange-600/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" aria-hidden />
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative space-y-3">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[75vh] w-auto rounded-lg mx-auto object-contain"
            />
            <div className="text-center">
              <h3 className="text-white font-bold text-lg">
                {selectedImage.title}
              </h3>
              <p className="text-gray-400 text-xs">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
