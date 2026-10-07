import { ArrowUpRight } from 'lucide-react'
import { SECTORS } from '../content'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function Sectors() {
  return (
    <section id="sectors" className="border-t border-black/10 py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="03">Our sectors</SectionLabel>
            <h2 className="heading-xl mt-8">
              Three sectors.
              <br />
              One self-sustaining model.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <p className="text-base md:text-lg leading-relaxed text-black/60">
              Each of our businesses contributes to a model of growth that funds our continued expansion across
              Africa.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 grid gap-12 md:gap-8 lg:grid-cols-3">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 120}>
              <article className="group flex h-full flex-col">
                <a
                  href={sector.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-white/5"
                  aria-label={`Visit the ${sector.title} website`}
                >
                  <img
                    src={sector.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition duration-[1200ms] ease-out-expo group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <span className="liquid-glass absolute left-4 top-4 rounded-md px-2.5 py-1 text-xs tabular-nums text-black">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </a>

                <div className="flex flex-1 flex-col pt-8">
                  <h3 className="text-2xl font-normal leading-tight tracking-[-0.02em]">{sector.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-black/60">{sector.body}</p>

                  <ul className="mt-6 border-t border-black/10">
                    {sector.capabilities.map((cap) => (
                      <li key={cap} className="border-b border-black/10 py-2.5 text-sm text-black/70">
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={sector.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-black transition-colors hover:text-lime"
                  >
                    Visit website
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
