import { useState, useEffect, useRef } from 'react'

/**
 * Multilingual welcome overlay — inspired by bdnath.xyz
 * Cycles greetings, then curtain-wipes away.
 * Runs ONCE PER SESSION (sessionStorage).
 * Reduced-motion users and return visits skip it entirely.
 * When finished, adds .hero-ready to <body> to start hero entrance.
 */
export function Welcome() {
  const KEY = 'portfolio-welcome-shown'
  const GREETINGS = [
    'Welcome',
    'স্বাগতম',     // Bengali
    'स्वागत है',    // Hindi
    'ようこそ',     // Japanese
    'Bienvenue',   // French
    'Willkommen',  // German
    'Hola',        // Spanish
  ]
  const WORD_MS = 210   // time per greeting
  const EXIT_MS = 660   // must be ≥ CSS wipe duration (640ms)

  const [shown, setShown] = useState(() => Boolean(sessionStorage.getItem(KEY)))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Finish: add .hero-ready and clean up
  const finish = () => {
    document.body.classList.add('hero-ready')
    setShown(true)
  }

  useEffect(() => {
    // Skip if already shown, or reduced motion
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (shown || reduced) {
      finish()
      return
    }

    sessionStorage.setItem(KEY, '1')

    // Cycle through greetings
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1
        if (next >= GREETINGS.length) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setIsLeaving(true)
          // Wait for wipe animation, then finish
          setTimeout(finish, EXIT_MS)
          return prev
        }
        return next
      })
    }, WORD_MS)

    // Escape hatch: click or keydown skips the intro
    const skip = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setIsLeaving(true)
      setTimeout(finish, EXIT_MS)
    }

    const overlay = document.getElementById('welcomeOverlay')
    overlay?.addEventListener('click', skip, { once: true })
    document.addEventListener('keydown', skip, { once: true })

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      overlay?.removeEventListener('click', skip)
      document.removeEventListener('keydown', skip)
    }
  }, [shown])

  if (shown) return null

  return (
    <div
      className={`welcome-overlay ${isLeaving ? 'is-leaving' : ''}`}
      id="welcomeOverlay"
      aria-hidden="true"
    >
      <div className="welcome-word" id="welcomeWord">
        {GREETINGS[currentIndex]}
      </div>
    </div>
  )
}