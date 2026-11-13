import { Home, Folder, User, FileText, Mail, Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { portfolioData } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/', Icon: Home },
  { label: 'Projects', href: '/', Icon: Folder, scrollTo: 'projects' },
  { label: 'About', href: '/about', Icon: User },
]

export function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const { personal } = portfolioData
  const [menuOpen, setMenuOpen] = useState(false)
  const [sidebarMounted, setSidebarMounted] = useState(false)
  const location = useLocation()

  // Mount sidebar after initial render for animation
  useEffect(() => {
    setSidebarMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname === href
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="nav-container container-page">
          {/* LEFT: Brand */}
          <div className="brand-area">
            <a href="/" className="brand-link" aria-label={`${personal.name} — home`}>
              <span className="brand-dot" aria-hidden="true" />
              <span className="brand-text">naman.dev</span>
            </a>
          </div>

          {/* CENTER: Navigation */}
          <nav className="nav-center" aria-label="Primary">
            {NAV_LINKS.map(({ label, href, Icon, scrollTo }) => {
              const active = isActive(href)
              return (
                <a
                  key={href}
                  href={scrollTo ? `${href}#${scrollTo}` : href}
                  className={cn('nav-link', active && 'nav-link-active')}
                >
                  <Icon size={20} className="nav-icon" aria-hidden="true" />
                  <span className="nav-label">{label}</span>
                </a>
              )
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="actions-area">
            <button
              type="button"
              className="btn-resume"
              onClick={onOpenResume}
            >
              <FileText size={18} className="btn-icon" aria-hidden="true" />
              <span>Resume</span>
            </button>
            <a href="/#contact" className="btn-contact">
              <Mail size={18} className="btn-icon" aria-hidden="true" />
              <span>Let's talk</span>
            </a>
            <button
              type="button"
              className="btn-mobile-menu"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev: boolean) => !prev)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar - always mounted for animation */}
      {sidebarMounted && (
        <>
          <div
            className={cn('mobile-overlay', menuOpen && 'is-open')}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <aside
            className={cn('mobile-sidebar', menuOpen && 'is-open')}
            aria-label="Navigation menu"
          >
            <div className="mobile-header">
              <div className="mobile-brand">
                <span className="mobile-brand-dot" aria-hidden="true" />
                <span className="brand-text-mobile">naman.dev</span>
              </div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile">
              {NAV_LINKS.map(({ label, href, Icon, scrollTo }) => {
                const active = isActive(href)
                return (
                  <a
                    key={href}
                    href={scrollTo ? `${href}#${scrollTo}` : href}
                    onClick={closeMenu}
                    className={cn('mobile-link', active && 'mobile-link-active')}
                  >
                    <Icon size={20} className="mobile-nav-icon" aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                )
              })}
            </nav>

            <div className="mobile-actions">
              <button
                type="button"
                className="btn-resume-mobile"
                onClick={() => {
                  closeMenu()
                  onOpenResume()
                }}
              >
                <FileText size={18} className="btn-icon" aria-hidden="true" />
                <span>Resume</span>
              </button>
              <a href="/#contact" className="btn-contact-mobile">
                <Mail size={18} className="btn-icon" aria-hidden="true" />
                <span>Let's talk</span>
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  )
}
