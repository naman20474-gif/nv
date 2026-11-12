import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCounter } from '@/hooks/useCounter'
import { useGithubUser } from '@/hooks/useGithub'

interface StatValueProps {
  value: number | string
  suffix?: string
  source?: 'github'
  githubUser?: string
}

/** Renders an animated count-up, or a live GitHub value, or the raw string. */
export function StatValue({ value, suffix, source, githubUser }: StatValueProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const githubCount = useGithubUser(source === 'github' ? githubUser : undefined)

  const pending = source === 'github' && githubCount === null
  const resolved = source === 'github' ? (githubCount ?? 0) : value
  const isNumber = typeof resolved === 'number'
  const count = useCounter(isNumber ? (resolved as number) : 0, inView)

  if (pending) {
    return (
      <span ref={ref} className="text-faint">
        —
      </span>
    )
  }

  return (
    <span ref={ref} className="tabular-nums">
      {isNumber ? count : (resolved as string)}
      {suffix}
    </span>
  )
}
