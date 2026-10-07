import { APPROACH_POINTS } from '../content'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="about" className="border-t border-black/10 py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel index="01">About Valley Group</SectionLabel>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.25] tracking-[-0.02em] text-black">
                A socially responsive, privately held South African group operating across the SADC region.
                We reinvest the returns of our own businesses to fund expansion, launch new ventures and
                acquire businesses that share our purpose.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-black/60">
                Our approach centres on triple bottom line principles: building profitable, self-sufficient
                enterprises that respond to the social, economic and environmental needs of the communities in
                which we operate.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:col-start-5">
            <h3 className="text-sm uppercase tracking-[0.2em] text-black/50">Our focus</h3>
            <p className="mt-6 text-lg leading-relaxed text-black/80">
              We build and grow businesses that align local relevance with global resonance, creating long-term
              value for our people, our communities and the continent, while driving measurable transformation
              across Africa.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={100}>
            <h3 className="text-sm uppercase tracking-[0.2em] text-black/50">Our approach</h3>
            <ul className="mt-6 border-t border-black/10">
              {APPROACH_POINTS.map((point) => (
                <li key={point.term} className="border-b border-black/10 py-4 text-base leading-relaxed text-black/60">
                  <span className="text-black">{point.term}</span> {point.rest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
