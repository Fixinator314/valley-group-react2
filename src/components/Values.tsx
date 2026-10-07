import { useState } from 'react'
import { Plus } from 'lucide-react'
import { VALUES } from '../content'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function Values() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-t border-black/10 py-24 md:py-32 lg:py-40">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionLabel index="02">Our values</SectionLabel>
              <h2 className="heading-lg mt-8">
                The foundation of
                <br />
                how we operate.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-black/60">
                Our values are not ideals on paper. They guide our behaviour, shape our decisions and reflect the
                kind of business we are proud to build.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="lg:col-span-7" delay={100}>
          <ul className="border-t border-black/10">
            {VALUES.map((value, i) => {
              const open = openIndex === i
              const panelId = `value-panel-${i}`
              return (
                <li key={value.title} className="border-b border-black/10">
                  <button
                    type="button"
                    className="group flex w-full items-center gap-6 py-6 md:py-8 text-left"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span className="w-8 shrink-0 text-sm tabular-nums text-black/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-xl md:text-2xl font-normal tracking-[-0.02em] text-black transition-colors group-hover:text-gray-300">
                      {value.title}
                    </span>
                    <Plus
                      size={20}
                      strokeWidth={1.25}
                      className={`shrink-0 text-black/60 transition-transform duration-500 ease-out-expo ${
                        open ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-8 pl-14 text-base leading-relaxed text-black/60">{value.body}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
