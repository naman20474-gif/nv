import { Building2 } from 'lucide-react'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { portfolioData } from '@/data/portfolio'

export function Experience() {
  const { experience } = portfolioData
  const data = experience.data

  return (
    <section id="experience" className="pt-16 sm:pt-20 pb-20 sm:pb-24">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow-varsity">{experience.eyebrow}</p>
              <h2 className="heading-varsity heading-h1 text-outline text-primary">
                {experience.heading}
              </h2>
            </div>
            <span className="pill pill-ok">{experience.badge}</span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <article className="card h-full p-6 sm:p-8">
              <p className="font-mono text-xs text-faint">{data.program}</p>
              <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{data.role}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                <Building2 size={16} />
                {data.company}
              </p>

              <p className="text-2 mt-3">{data.summary}</p>

              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                {data.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-line pt-4">
                    <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-faint">
                      <Icon name={fact.icon} size={14} />
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>

          <Reveal variant="right">
            <aside className="card flex h-full flex-col p-6 sm:p-8" aria-label="Verified experience">
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-[#0a66c2] text-white">
                  <BrandIcon name="linkedin" size={13} />
                </span>
                <span className="font-mono">Verified experience</span>
              </div>

              <h3 className="mt-3 font-display text-lg font-semibold">
                The moment behind the milestone.
              </h3>
              <p className="text-2 mt-2 text-sm">
                The full internship story and certificate, shared in one place.
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-line bg-canvas-soft">
                <iframe
                  src={data.linkedinEmbedUrl}
                  title={`LinkedIn post — ${data.company}`}
                  height={420}
                  width="100%"
                  frameBorder={0}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="block w-full"
                />
              </div>

              <a
                href={data.linkedinPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw mt-auto pt-4 text-sm"
              >
                Open on LinkedIn <span className="arrow">↗</span>
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
