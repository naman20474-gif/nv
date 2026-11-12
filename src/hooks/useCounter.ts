import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 → target once `active` becomes true.
 * Uses an ease-out cubic so the number "settles" rather than stopping abruptly.
 */
export function useCounter(target: number, active: boolean, duration = 1400): number {
  const [value, setValue] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    if (!active || !Number.isFinite(target)) return

    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target, active, duration])

  return value
}
