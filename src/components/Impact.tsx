import { useEffect, useState } from 'react'
import { IMPACT_CONTEXT, STATS, type Stat } from '../content'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const COUNT_DURATION = 2200

function Counter({ stat, start, delay }: { stat: Stat; start: boolean; delay: number }) {
  const reducedMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (reducedMotion) {
      setValue(stat.value)
      return
    }
    let frame = 0
    let startTime = 0
    const timeout = setTimeout(() => {
      const tick = (now: number) => {
        if (!startTime) startTime = now
        const progress = Math.min((now - startTime) / COUNT_DURATION, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setValue(Math.round(stat.value * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frame)
    }
  }, [start, stat.value, delay, reducedMotion])

  return (
    <span className="tabular-nums">
      {stat.prefix}
      {value.toLocaleString('en-ZA')}
      {stat.suffix && <span className="text-lime">{stat.suffix}</span>}
    </span>
  )
}

export default function Impact() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="impact" className="border-t border-black/10 py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="04">Our impact</SectionLabel>
            <h2 className="heading-xl mt-8">
              Measurable results
              <br />
              that matter.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <p className="text-sm text-black/40">Based on available data as of 2025.</p>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="mt-16 md:mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-white/10 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex min-h-[150px] flex-col justify-between gap-6 bg-ink p-5 md:min-h-[200px] md:gap-10 md:p-8">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.04em]">
                <Counter stat={stat} start={inView} delay={i * 80} />
              </p>
              <p className="max-w-[16rem] text-sm leading-relaxed text-black/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {IMPACT_CONTEXT.map((group, i) => (
            <Reveal key={group.title} delay={i * 100} className={i === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:col-start-7'}>
              <h3 className="text-sm uppercase tracking-[0.2em] text-black/50">{group.title}</h3>
              <ul className="mt-6 border-t border-black/10">
                {group.points.map((point) => (
                  <li key={point} className="border-b border-black/10 py-4 text-base leading-relaxed text-black/70">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
