import { CONTACT, NAV_LINKS } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 pt-16 pb-10">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="https://res.cloudinary.com/jf4bgnfx/image/upload/v1791376396/Valley_Group_Logo_backgroundless.png"
              alt="Valley Group"
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-black/50">
              Building purpose-led businesses in transformation advisory,
              agro-processing and food manufacturing, and global trade across
              Africa.
            </p>
          </div>

          <nav className="md:col-span-3 md:col-start-7" aria-label="Footer">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map(
                (link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-black/70 transition-colors hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-sm text-black/70">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-black"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-black"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              {CONTACT.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-black/10 pt-8 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Valley Group (Pty) Ltd. All rights
            reserved.
          </p>
          <a href="#top" className="transition-colors hover:text-black">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
