import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Maximum tilt in degrees. */
  intensity?: number
}

/** Subtle pointer-driven 3D tilt. Disabled for reduced-motion users. */
export function TiltCard({ children, className, intensity = 6 }: TiltCardProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 220,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 220,
    damping: 22,
  })

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(event) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        px.set((event.clientX - rect.left) / rect.width - 0.5)
        py.set((event.clientY - rect.top) / rect.height - 0.5)
      }}
      onPointerLeave={() => {
        px.set(0)
        py.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
