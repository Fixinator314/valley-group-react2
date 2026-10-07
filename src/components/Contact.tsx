import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { CONTACT } from '../content'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

/*
 * The form hands the enquiry to the visitor's email app, addressed to CONTACT.email.
 * To send server-side instead, point handleSubmit at a configured mail endpoint.
 */
export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const body = [
      `Name: ${name}`,
      `Email: ${data.get('email') ?? ''}`,
      `Phone: ${data.get('phone') ?? ''}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n')
    const subject = `Website enquiry from ${name}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-black/10 py-24 md:py-32 lg:py-40">
      <div className="container-page grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="08">Contact</SectionLabel>
            <h2 className="heading-xl mt-8">
              Let&rsquo;s build
              <br />
              what comes next.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mt-12 space-y-8 text-base">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-black/40">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${CONTACT.email}`} className="text-black transition-colors hover:text-lime">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-black/40">Phone</dt>
                <dd className="mt-2">
                  <a href={CONTACT.phoneHref} className="text-black transition-colors hover:text-lime">
                    {CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-black/40">Office</dt>
                <dd className="mt-2 text-black/80">
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <a
                    href={CONTACT.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-black/60 transition-colors hover:text-black"
                  >
                    Open in Maps
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={150}>
          <form onSubmit={handleSubmit} className="grid gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name and surname</span>
                <input name="name" required autoComplete="name" placeholder="Name and surname" className="field" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="Email" className="field" />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Phone</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Phone (optional)" className="field" />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea name="message" required rows={5} placeholder="How can we help?" className="field resize-none" />
            </label>
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors hover:bg-lime"
              >
                Send message
              </button>
              {sent && (
                <p className="text-sm text-black/60" role="status">
                  Your email app should now be open with your message ready to send.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>

      <Reveal className="container-page mt-24 md:mt-32">
        <div className="overflow-hidden rounded-xl border border-black/10">
          <iframe
            title="Valley Group office location"
            src={CONTACT.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[360px] w-full md:h-[440px] [filter:grayscale(1)_invert(0.92)_contrast(0.85)]"
          />
        </div>
      </Reveal>
    </section>
  )
}
