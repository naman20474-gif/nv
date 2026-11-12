import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { portfolioData } from '@/data/portfolio'

interface CTAProps {
  onHire: () => void
  onConnect: () => void
}

export function CTA({ onHire, onConnect }: CTAProps) {
  const { cta } = portfolioData

  return (
    <section id="contact" className="pt-20 sm:pt-24 pb-24 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="heading-varsity heading-h2 text-outline text-primary sm:text-3xl">
                {cta.heading}
              </h2>
              <p className="text-2 mt-2">{cta.sub}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" onClick={onHire}>
                {cta.primaryLabel} <span className="arrow">↗</span>
              </Button>
              <Button variant="ghost" onClick={onConnect}>
                {cta.secondaryLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
