import { ArrowUpRight, GitFork, Star } from 'lucide-react'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { Reveal } from '@/components/ui/Reveal'
import { portfolioData } from '@/data/portfolio'
import { useRepoStats } from '@/hooks/useGithub'

export function OpenSource() {
  const { openSource } = portfolioData
  const repoKeys = openSource.projects
    .map((project) => project.repo)
    .filter((repo): repo is string => Boolean(repo))
  const liveStats = useRepoStats(repoKeys)

  return (
    <section id="open-source" className="pt-10 sm:pt-12 pb-20 sm:pb-24">
      <div className="container-page">
        <div className="card p-6 sm:p-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow-varsity">{openSource.eyebrow}</p>
                <h2 className="heading-varsity heading-h1 text-outline text-primary">
                  {openSource.heading}
                </h2>
              </div>
              <a
                href={openSource.allReposUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <BrandIcon name="github" size={16} />
                {openSource.allReposLabel}
              </a>
            </div>
          </Reveal>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {openSource.projects.map((project, index) => {
              const stats = project.repo ? liveStats[project.repo] : undefined
              const showStars = stats ? stats.stars > 0 : false
              const showForks = stats ? stats.forks > 0 : false

              return (
                <Reveal key={project.id} delay={index * 0.06}>
                  <li className="card card-hover flex h-full flex-col p-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-display text-base font-semibold"
                    >
                      <span
                        className="h-2 w-2 flex-none rounded-full"
                        style={{ background: project.accent ?? 'var(--color-ink)' }}
                        aria-hidden="true"
                      />
                      <span className="truncate">{project.name}</span>
                      <ArrowUpRight size={15} className="ml-auto flex-none text-faint" />
                    </a>

                    <p className="text-2 mt-2 flex-1 text-sm">{project.description}</p>

                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-canvas-soft px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 flex items-center gap-4 border-t border-line pt-3 text-xs text-muted">
                      {project.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ background: project.languageColor ?? '#888' }}
                            aria-hidden="true"
                          />
                          {project.language}
                        </span>
                      )}
                      {showStars && stats && (
                        <span className="inline-flex items-center gap-1">
                          <Star size={13} /> {stats.stars}
                        </span>
                      )}
                      {showForks && stats && (
                        <span className="inline-flex items-center gap-1">
                          <GitFork size={13} /> {stats.forks}
                        </span>
                      )}
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
