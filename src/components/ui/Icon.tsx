import { Award, BadgeCheck, CalendarDays, Timer } from 'lucide-react'
import type { LucideProps } from 'lucide-react'

/** Explicit map keeps the bundle small — add icons here as the data file needs them. */
const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Award,
  BadgeCheck,
  CalendarDays,
  Timer,
}

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = ICONS[name]
  if (!Component) return null
  return <Component {...props} />
}
