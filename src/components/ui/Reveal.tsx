import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'up' | 'fade' | 'scale' | 'right'

const VARIANTS: Record<Variant, Variants> = {
  up: { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  scale: { hidden: { opacity: 0, y: 18, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1 } },
  right: { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } },
}

interface RevealProps {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
}

/** Fades / slides its children in once they scroll into view. */
export function Reveal({ children, variant = 'up', delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={VARIANTS[variant]}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
