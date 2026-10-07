import AnimatedHeading from "./AnimatedHeading";
import FadeIn from "./FadeIn";

// Placeholder footage until Valley Group supplies its own (e.g. '/images/hero.mp4').
const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/jf4bgnfx/video/upload/v1791378729/0_Township_Mall_Of_Africa_1280x720.mp4";
const HERO_POSTER_SRC = "/images/hero-poster.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-white text-black"
    >
      {/* Hero Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
            <div>
              <AnimatedHeading
                text={"Building value.\nShaping futures."}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-normal leading-[1.05] mb-4"
                style={{ letterSpacing: "-0.04em" }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-white/85 mb-5 max-w-xl">
                  A South African group building purpose-led businesses in
                  advisory, food and global trade, and reinvesting what we earn
                  to grow across Africa.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors hover:bg-[#89c640]"
                  >
                    Contact Us
                  </a>

                  <a
                    href="#sectors"
                    className="liquid-glass border border-white/30 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-white hover:text-black"
                  >
                    Explore Our Sectors
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn
              delay={1400}
              duration={1000}
              className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0"
            >
              <div className="liquid-glass border border-transparent px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Advisory. Food. Trade.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
