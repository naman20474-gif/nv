import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'
import { portfolioData } from '@/data/portfolio'

export function FeaturedProjects() {
  const { featured } = portfolioData
  const { flagship } = featured

  return (
    <section id="projects" className="pt-16 sm:pt-20 pb-20 sm:pb-24">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow-varsity">{featured.eyebrow}</p>
              <h2 className="heading-varsity heading-h1 text-outline text-primary">
                {featured.heading}
              </h2>
            </div>
            <a
              href={featured.viewAllUrl}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {featured.viewAllLabel} <span className="arrow">↗</span>
            </a>
          </div>
        </Reveal>

        {/* Flagship */}
        <Reveal variant="scale" delay={0.05}>
          <article className="card card-hover mt-8 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[16/10] bg-canvas-soft md:aspect-auto">
                <SmartImage
                  src={flagship.image}
                  alt={flagship.name}
                  fallbackLabel={flagship.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold">{flagship.name}</h3>
                  {flagship.status && <span className="pill pill-ok">{flagship.status}</span>}
                </div>

                <p className="text-2 mt-3">{flagship.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {flagship.technologies.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                  {flagship.liveUrl && (
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw ml-auto text-sm"
                    >
                      Visit site <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Grid */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {featured.grid.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                  {project.year && <span className="font-mono text-xs text-faint">{project.year}</span>}
                </div>

                <p className="text-2 mt-2 flex-1">{project.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw ml-auto text-sm"
                    >
                      GitHub <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
