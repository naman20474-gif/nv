import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'accent'

interface BaseProps {
  variant?: Variant
  children: ReactNode
  className?: string
  /** Renders an <a> when provided. */
  href?: string
  external?: boolean
}

interface AnchorProps extends BaseProps {
  href: string
  external?: boolean
  onClick?: never
}

interface ButtonProps extends BaseProps {
  href?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
}

type Props = AnchorProps | ButtonProps

const VARIANT_CLASS: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  accent: 'btn-accent',
}

export function Button(props: Props) {
  const { variant = 'primary', children, className } = props
  const classes = cn('btn', VARIANT_CLASS[variant], className)

  if ('href' in props && props.href) {
    const { href, external } = props
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  }

  const { onClick, type = 'button' } = props as ButtonProps
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
