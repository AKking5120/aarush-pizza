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
    [activeCategory, galleryImages],
  )

  return (
    <section
      id="gallery"
      className="py-12 bg-panel border-t border-gray-800"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="gallery-heading" className="text-2xl font-bold text-white">
          Gallery
        </h2>

        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {galleryFilterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs min-h-9 ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-400 bg-ink border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {filtered.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="w-full text-left rounded-lg overflow-hidden border border-gray-800"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                  width={600}
                  height={400}
                />
                <p className="p-3 text-sm text-gray-300 bg-ink">{item.title}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[80vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  )
}
