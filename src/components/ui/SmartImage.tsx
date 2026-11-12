import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Text shown inside the fallback block when the image fails to load. */
  fallbackLabel?: string
}

/**
 * Wraps <img> with a graceful fallback so a missing asset never renders
 * as a broken-image icon.
 */
export function SmartImage({ fallbackLabel, className, alt, ...rest }: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-canvas-soft font-mono text-xs text-faint ${className ?? ''}`}
      >
        {fallbackLabel ?? alt ?? 'Image'}
      </div>
    )
  }

  return <img className={className} alt={alt} onError={() => setFailed(true)} {...rest} />
}
