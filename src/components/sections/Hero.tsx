import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatValue } from '@/components/ui/StatValue'
import { portfolioData } from '@/data/portfolio'

export function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const { hero, stats, expertise } = portfolioData
  const green = hero.highlights.find((item) => item.tone === 'green')
  const violet = hero.highlights.find((item) => item.tone === 'violet')

  return (
    <>
      {/* Hero Section — two column layout */}
      <section id="home" className="hero">
        <div className="container-page hero-inner">
          <div className="hero-grid">
            <div className="hero-content">
              {/* Availability badge — delay 100ms */}
              <span className="hero-anim hero-badge" style={{ '--d': '100ms' } as React.CSSProperties}>
                <span className="dot-live" aria-hidden="true" />
                {hero.badge}
              </span>

              {/* Headline — delay 220ms */}
              <h1 className="hero-anim heading-varsity heading-hero text-outline" style={{ '--d': '220ms' } as React.CSSProperties}>
                <span className="text-primary">{hero.headingLead}{' '}</span>
                {green && <span className="text-highlight-green">{green.text}</span>},
                <br className="hidden sm:block" />{' '}
                {violet && <span className="text-highlight-purple">{violet.text}</span>}{' '}
                <span className="text-primary">{hero.headingTail}</span>
              </h1>

              {/* Subtitle — delay 340ms */}
              <p className="hero-anim hero-sub text-2" style={{ '--d': '340ms' } as React.CSSProperties}>
                {hero.description}{' '}
                <a
                  href={hero.currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw"
                >
                  {hero.currentProject.name}
                </a>{' '}
                — {hero.currentProject.blurb}
              </p>

              {/* CTAs — delay 460ms */}
              <div className="hero-anim hero-actions" style={{ '--d': '460ms' } as React.CSSProperties}>
                <Button href={hero.primaryHref} variant="primary">
                  {hero.primaryCta} <span className="arrow">↗</span>
                </Button>
                <Button variant="ghost" onClick={onOpenResume}>
                  {hero.secondaryCta}
                </Button>
              </div>
            </div>

            {/* Technology illustration card — delay 420ms */}
            <div className="hero-illustration">
              <aside className="hero-anim build-motion" style={{ '--d': '420ms' } as React.CSSProperties} aria-label="What I build">
                <h2 className="sr-only">What I build</h2>
                <ul className="build-motion-list">
                  {expertise.map((tag, i) => (
                    <li
                      key={tag.label}
                      className="build-motion-row"
                      style={{
                        '--tone': tag.tone,
                        '--row-delay': `${i * 2}s`,
                      } as React.CSSProperties}
                    >
                      <span className="build-motion-marker" aria-hidden="true">
                        <i style={{ '--tone': tag.tone } as React.CSSProperties} />
                      </span>
                      <span className="build-motion-label">{tag.label}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section — full width, separate section below hero */}
      <section id="stats" className="stats-section">
        <div className="container-page">
          <dl className="hero-anim hero-stats" style={{ '--d': '580ms' } as React.CSSProperties}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-faint">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                  <StatValue
                    value={stat.value}
                    suffix={stat.suffix}
                    source={stat.source}
                    githubUser={stat.githubUser}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Scroll cue — leads into Open Source section */}
      <div className="mt-8 flex justify-center">
        <a
          href="#open-source"
          aria-label="Scroll to next section"
          className="hero-anim scroll-cue"
          style={{ '--d': '800ms' } as React.CSSProperties}
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </>
  )
}
