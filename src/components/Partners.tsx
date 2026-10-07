import { PARTNER_LOGOS } from '../content'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const OPPORTUNITIES = [
  {
    title: 'Business opportunities',
    body: 'We explore strategic partnerships and business opportunities in sectors aligned with our expertise and impact focus.',
  },
  {
    title: 'Strategic collaboration',
    body: 'Our operating businesses welcome partnerships with organisations seeking excellence in transformation advisory, food manufacturing and global trade and procurement.',
  },
]

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {PARTNER_LOGOS.map((logo) => (
        <li key={logo.name} className="flex h-24 w-44 shrink-0 items-center justify-center md:w-56">
          <img
            src={logo.src}
            alt={hidden ? '' : logo.name}
            loading="lazy"
            className="h-full w-full scale-[1.9] object-contain opacity-60 invert mix-blend-screen transition-opacity duration-300 hover:opacity-100"
          />
        </li>
      ))}
    </ul>
  )
}

export default function Partners() {
  return (
    <section className="border-t border-black/10 pt-24 md:pt-32 lg:pt-40">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="07">Partner with us</SectionLabel>
            <h2 className="heading-xl mt-8">
              Building the future
              <br />
              together.
            </h2>
            <p className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-black/60">
              We welcome partnerships with organisations, suppliers and clients who share our commitment to
              sustainable value creation and transformational impact across Africa.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {OPPORTUNITIES.map((item, i) => (
              <Reveal key={item.title} delay={100 + i * 100}>
                <div className="border-t border-black/20 pt-6">
                  <h3 className="text-lg font-normal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <a
              href="#contact"
              className="mt-12 inline-block bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors hover:bg-lime"
            >
              Start a conversation
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6" delay={150}>
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-white/5 lg:aspect-auto lg:h-full">
            <img
              src="/images/partners.jpg"
              alt=""
              loading="lazy"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-24 md:mt-32 border-y border-black/10 py-10">
        <p className="container-page text-xs uppercase tracking-[0.2em] text-black/40">
          Our businesses &amp; partners
        </p>
        <div className="relative mt-6 overflow-hidden bg-ink [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee-track flex w-max bg-ink">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
