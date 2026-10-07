import { PILLARS } from '../content'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function Approach() {
  return (
    <section id="approach" className="border-t border-black/10 py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="05">Our approach</SectionLabel>
          <h2 className="heading-xl mt-8 max-w-4xl">
            Self-sustaining growth.
            <br />
            Operational excellence.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120}>
              <div className="border-t border-black/20 pt-8">
                <span className="text-sm tabular-nums text-black/40">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-2xl font-normal tracking-[-0.02em]">{pillar.title}</h3>
                <p className="mt-4 text-base text-black/80">{pillar.lead}</p>
                <ul className="mt-6 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-3 text-base leading-relaxed text-black/60">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-white/40" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
