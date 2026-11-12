import { useState, useEffect } from 'react'

/**
 * Session-scoped welcome overlay.
 * Shows once per session, wipes away, then signals .hero-ready on <body>
 * so the hero entrance animation can play.
 */
export function Welcome() {
  const KEY = 'portfolio-welcome-shown'
  const [shown, setShown] = useState(() => Boolean(sessionStorage.getItem(KEY)))

  useEffect(() => {
    if (shown) {
      document.body.classList.add('hero-ready')
      return
    }

    sessionStorage.setItem(KEY, '1')

    const t = setTimeout(() => {
      document.body.classList.add('hero-ready')
      setShown(true)
    }, 1200 + 640) // dwell + wipe duration

    return () => clearTimeout(t)
  }, [shown])

  if (shown) return null

  return (
    <div className="welcome-overlay" id="welcomeOverlay" aria-hidden="true">
      <div className="welcome-word" id="welcomeWord">
        Welcome
      </div>
    </div>
  )
}
