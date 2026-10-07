import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function Leadership() {
  return (
    <section className="border-t border-black/10 py-24 md:py-32 lg:py-40">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
            <img
              src="/images/leadership.jpg"
              alt="Valley Group leadership in conversation"
              loading="lazy"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <SectionLabel index="06">Leadership</SectionLabel>
            <h2 className="heading-lg mt-8">
              Experienced.
              <br />
              Committed. Decisive.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-black/60">
              <p>
                Valley Group is led by a small, experienced executive team with deep expertise across transformation
                advisory, agribusiness, retail, international trade and business development, with decades of
                collective experience building sustainable, self-funded enterprises.
              </p>
              <p>
                Our lean, owner-led structure means decisions are made quickly and decisively, without the delays of
                a conventional board process, allowing us to act in the best interests of our businesses, our people
                and the communities we serve.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
