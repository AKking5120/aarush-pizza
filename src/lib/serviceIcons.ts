import type { LucideIcon } from 'lucide-react'
import {
  Cog,
  Compass,
  Flame,
  Gauge,
  Info,
  Layers,
  Package,
  Settings,
  ShieldCheck,
  Sparkles,
  Thermometer,
  UtensilsCrossed,
  Wrench,
  Zap,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Wrench,
  ShieldCheck,
  Cog,
  Sparkles,
  Compass,
  Layers,
  Info,
  Gauge,
  Package,
  Settings,
  Thermometer,
  Zap,
  UtensilsCrossed,
}

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? Wrench
}

export const serviceIconOptions = Object.keys(iconMap).sort()
