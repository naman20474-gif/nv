import { portfolioData } from '@/data/portfolio'

export function Footer() {
  const { personal, footer, nav } = portfolioData

  return (
    <footer className="border-t border-line py-10">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-display text-sm font-semibold text-white">
              {personal.logoMark}
            </span>
            <span className="heading-varsity heading-sub text-outline text-primary text-sm">
              {personal.name}
            </span>
          </div>
          <p className="text-2 mt-3 max-w-xs text-sm">{footer.tagline}</p>
          <p className="mt-3 font-mono text-xs text-faint">{personal.location}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="heading-varsity heading-sub text-outline text-primary">Navigate</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="heading-varsity heading-sub text-outline text-primary">Elsewhere</h2>
          <ul className="mt-3 space-y-2">
            {personal.social.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-8 flex flex-col gap-3 border-t border-line pt-4 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <p>Built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  )
}
