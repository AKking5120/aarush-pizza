import type { LucideIcon } from 'lucide-react'
import {
  CheckCircle2,
  Clock,
  Layers,
  MapPin,
  Phone,
  Wrench,
} from 'lucide-react'

export type WhyChooseItem = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const whyChooseUsItems: WhyChooseItem[] = [
  {
    id: 'technical',
    title: 'Focused Technical Service',
    description:
      'Dedicated attention to pizza oven mechanisms including gas jets, burners, temperature sensors, and valves.',
    icon: Wrench,
  },
  {
    id: 'parts',
    title: 'Quality Spare Parts Sourcing',
    description:
      'Access to compatible gas train parts, thermocouples, igniters, and knobs for reliable operation.',
    icon: Layers,
  },
  {
    id: 'response',
    title: 'Prompt Response',
    description:
      'We understand kitchen downtime is costly. We respond quickly to repair calls and part inquiries.',
    icon: Clock,
  },
  {
    id: 'communication',
    title: 'Transparent Communication',
    description:
      'Clear evaluation of faulty components and honest recommendations for repair versus part replacement.',
    icon: CheckCircle2,
  },
  {
    id: 'local',
    title: 'Local New Delhi Service',
    description:
      'Conveniently located in Harsh Vihar, Molar Band, Meethapur Chowk for quick local support.',
    icon: MapPin,
  },
  {
    id: 'support',
    title: 'Direct Customer Assistance',
    description:
      'Speak directly with the repair team for troubleshooting advice or specific component matching.',
    icon: Phone,
  },
]
