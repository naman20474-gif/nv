import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { portfolioData } from '@/data/portfolio'

function TechIcon({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="grid h-5 w-5 flex-none place-items-center rounded bg-canvas-soft text-[10px] font-semibold text-muted"
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-5 w-5 flex-none object-contain"
    />
  )
}

export function Skills() {
  const { skills } = portfolioData
  const loop = [...skills.items, ...skills.items]

  return (
    <section id="stack" className="pt-16 sm:pt-20 pb-20 sm:pb-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow-varsity">{skills.eyebrow}</p>
          <h2 className="heading-varsity heading-h2 text-outline text-primary max-w-3xl leading-snug">
            {skills.heading}
          </h2>
        </Reveal>
      </div>

      <Reveal variant="fade">
        <div className="marquee mt-8">
          <div className="marquee-track">
            {loop.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="tech-pill"
                aria-hidden={index >= skills.items.length}
              >
                <TechIcon src={`/icons/${skill.icon}`} name={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
