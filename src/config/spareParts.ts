export type SparePartCategory =
  | 'All'
  | 'Burners'
  | 'Gas Components'
  | 'Heating Components'
  | 'Knobs & Controls'
  | 'Replacement Parts'

export type SparePartItem = {
  id: string
  category: Exclude<SparePartCategory, 'All'>
  name: string
  description: string
  compatible: string
  imageSrc: string
  imageAlt: string
}

export const sparePartFilterCategories: SparePartCategory[] = [
  'All',
  'Burners',
  'Gas Components',
  'Heating Components',
  'Knobs & Controls',
  'Replacement Parts',
]

export const spareParts: SparePartItem[] = [
  {
    id: 'part-1',
    name: 'Commercial Gas Burner Assembly',
    category: 'Burners',
    description:
      'Heavy-duty burner unit suitable for commercial deck pizza ovens.',
    compatible: 'Commercial deck ovens — confirm model before ordering',
    imageSrc:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Commercial gas burner assembly placeholder',
  },
  {
    id: 'part-2',
    name: 'Gas Control Thermostat Valve',
    category: 'Gas Components',
    description:
      'Gas regulation valve with integrated safety shut-off mechanism.',
    compatible: 'Standard gas pizza ovens — enquire for fitment',
    imageSrc:
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Gas control valve placeholder',
  },
  {
    id: 'part-3',
    name: 'High-Temp Thermocouple Sensor',
    category: 'Heating Components',
    description:
      'Flame sensor lead engineered for continuous high baking heat.',
    compatible: 'Universal gas appliances — verify specifications',
    imageSrc:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Thermocouple sensor placeholder',
  },
  {
    id: 'part-4',
    name: 'Heat-Resistant Control Knobs',
    category: 'Knobs & Controls',
    description:
      'Control knobs with clear temperature indicators for oven panels.',
    compatible: 'Multiple oven types — send photos for matching',
    imageSrc:
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Control knobs placeholder',
  },
  {
    id: 'part-5',
    name: 'Piezo Spark Igniter Kit',
    category: 'Replacement Parts',
    description:
      'Push-button ignition kit with wire lead and ceramic electrode.',
    compatible: 'Gas pizza ovens',
    imageSrc:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Igniter kit placeholder',
  },
  {
    id: 'part-6',
    name: 'Gas Regulator & Pressure Gauge',
    category: 'Gas Components',
    description:
      'Pressure regulator for steady commercial gas flow — professional fitting recommended.',
    compatible: 'LPG & PNG setups — confirm with technician',
    imageSrc:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Gas regulator placeholder',
  },
]
