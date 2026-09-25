export type GalleryFilterCategory =
  | 'All'
  | 'Ovens'
  | 'Repairs'
  | 'Spare Parts'
  | 'Workshop'

export type GalleryImage = {
  id: number
  title: string
  category: Exclude<GalleryFilterCategory, 'All'>
  src: string
  caption: string
  alt: string
}

export const galleryFilterCategories: GalleryFilterCategory[] = [
  'All',
  'Ovens',
  'Repairs',
  'Spare Parts',
  'Workshop',
]

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Gas Pizza Oven Inspection',
    category: 'Repairs',
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    caption: 'Technical check of flame ignition and gas train manifold.',
    alt: 'Pizza oven inspection placeholder',
  },
  {
    id: 2,
    title: 'Commercial Deck Oven',
    category: 'Ovens',
    src: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800',
    caption: 'Heavy duty commercial pizza baking unit servicing.',
    alt: 'Commercial deck oven placeholder',
  },
  {
    id: 3,
    title: 'Spare Parts Inventory',
    category: 'Spare Parts',
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    caption: 'Burner, valve, and ignition replacement stock.',
    alt: 'Spare parts placeholder',
  },
  {
    id: 4,
    title: 'Burner Nozzle Servicing',
    category: 'Repairs',
    src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
    caption: 'Clearing carbon buildup and checking flame quality.',
    alt: 'Burner servicing placeholder',
  },
  {
    id: 5,
    title: 'Workshop Testing Station',
    category: 'Workshop',
    src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800',
    caption: 'Component bench testing before installation.',
    alt: 'Workshop placeholder',
  },
  {
    id: 6,
    title: 'Oven Temperature Calibration',
    category: 'Ovens',
    src: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=800',
    caption: 'Verifying deck baking temperatures.',
    alt: 'Temperature calibration placeholder',
  },
]
