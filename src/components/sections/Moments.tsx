import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'
import { portfolioData } from '@/data/portfolio'

export function Moments() {
  const { moments } = portfolioData

  return (
    <section id="moments" className="pt-16 sm:pt-20 pb-20 sm:pb-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow-varsity">{moments.eyebrow}</p>
          <h2 className="heading-varsity heading-h1 text-outline text-primary">
            {moments.heading}
          </h2>
          <p className="text-2 mt-2 max-w-2xl">{moments.sub}</p>
        </Reveal>

        <ul className="mt-8 space-y-6">
          {moments.items.map((moment) => (
            <li key={moment.id}>
              <Reveal variant="scale">
                <article className="moment-card card card-hover overflow-hidden relative group">
                  <div className="grid md:grid-cols-2">
                    {/* Image side */}
                    <div
                      className="relative aspect-[4/3] bg-canvas-soft md:aspect-auto overflow-hidden"
                    >
                      <div className="absolute inset-0 z-10">
                        <SmartImage
                          src={moment.image}
                          alt={moment.title}
                          fallbackLabel="Moment"
                          loading="lazy"
                          className="h-full w-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out"
                        />
                      </div>

                      {/* Border reveal — draws itself on hover */}
                      <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute inset-0 border border-brand-violet/0 group-hover:border-brand-violet/60 transition-all duration-500 ease-out rounded-[1rem]" />
                        <div
                          className="absolute inset-0 rounded-[1rem] border-2 border-transparent group-hover:border-brand-violet/40 transition-all duration-700 ease-out"
                        />
                      </div>

                      {/* Shimmer sweep */}
                      <div
                        className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:shimmer-active"
                        style={{
                          backgroundImage:
                            'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                        }}
                      />

                      {/* Overlay caption — reveals moment details on image */}
                      <div
                        className="absolute inset-0 z-40 bg-black/0 group-hover:bg-black/60 transition-all duration-500 ease-out flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100"
                      >
                        <div className="text-center text-white">
                          <p className="font-mono text-xs text-violet-300 tracking-widest uppercase mb-2">
                            {moment.date} · {moment.organization}
                          </p>
                          <h3 className="text-xl font-bold mb-2 leading-tight">
                            {moment.title}
                          </h3>
                          <p className="text-sm text-white/90 max-w-xs leading-relaxed">
                            {moment.description}
                          </p>
                          <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {moment.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2 py-1 rounded text-violet-200 border border-white/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text side */}
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                      <p className="font-mono text-xs text-faint">
                        {moment.date} · {moment.organization}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                        {moment.title}
                      </h3>
                      <p className="text-2 mt-2">{moment.description}</p>

                      <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                        {moment.tags.map((tag) => (
                          <li key={tag} className="text-xs font-medium text-brand-violet">
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={moment.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-draw mt-4 inline-flex items-center gap-1 text-sm"
                      >
                        {moment.externalLabel} <span className="arrow">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
