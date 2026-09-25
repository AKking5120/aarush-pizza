import type { LucideIcon } from 'lucide-react'
import {
  Cog,
  Compass,
  Flame,
  Info,
  Layers,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'

export type ServiceItem = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  popular?: boolean
}

export const services: ServiceItem[] = [
  {
    id: 'pizza-oven-repair',
    title: 'Pizza Oven Repair',
    description:
      'Comprehensive diagnosis and prompt repair for commercial and heavy-duty pizza ovens.',
    icon: Flame,
    popular: true,
  },
  {
    id: 'gas-pizza-oven-service',
    title: 'Gas Pizza Oven Service',
    description:
      'Routine calibration, line testing, and thorough servicing for gas-operated baking equipment.',
    icon: Wrench,
    popular: true,
  },
  {
    id: 'oven-maintenance',
    title: 'Preventative Maintenance',
    description:
      'Scheduled checkups to help prevent sudden breakdown during peak operational hours.',
    icon: ShieldCheck,
  },
  {
    id: 'gas-system-inspection',
    title: 'Gas System Inspection',
    description:
      'Leakage inspection, pressure testing, and gas train component evaluation.',
    icon: Cog,
  },
  {
    id: 'burner-service',
    title: 'Burner Related Service',
    description:
      'Jet cleaning, flame regulation, pilot light repair, and burner manifold servicing.',
    icon: Sparkles,
    popular: true,
  },
  {
    id: 'temperature-diagnosis',
    title: 'Heating / Temp Diagnosis',
    description:
      'Thermostat check, heat distribution assessment, thermocouple and safety valve testing.',
    icon: Compass,
  },
  {
    id: 'spare-parts-replacement',
    title: 'Spare Parts Replacement',
    description:
      'Fitting compatible replacement components for faulty or worn oven parts.',
    icon: Layers,
  },
  {
    id: 'commercial-kitchen',
    title: 'Commercial Kitchen Support',
    description:
      'General technical support for related commercial food preparation and baking equipment.',
    icon: Info,
  },
]
