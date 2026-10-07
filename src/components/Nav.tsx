import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-6 md:px-12 lg:px-16 pt-6 pb-4 transition-colors duration-500 ${
        scrolled
          ? "bg-gradient-to-b from-white via-white/90 to-transparent"
          : ""
      }`}
    >
      <nav
        className={`liquid-glass mx-auto max-w-[1440px] rounded-xl px-4 py-2 flex items-center justify-between transition-colors duration-500 ${
          scrolled ? "bg-white/70" : ""
        }`}
        aria-label="Main"
      >
        <a href="#top" className="block" onClick={() => setOpen(false)}>
          <img
            src="https://res.cloudinary.com/jf4bgnfx/image/upload/v1791376396/Valley_Group_Logo_backgroundless.png"
            alt="Valley Group"
            className="block h-8 md:h-9 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-black hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
          <button
            type="button"
            className="md:hidden p-2 text-black"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="liquid-glass md:hidden mt-2 rounded-xl bg-white/80 p-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base text-black hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
