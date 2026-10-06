import Button from '@/components/Button'
import { ArrowRightIcon, ChevronDownIcon } from '@/components/Icons'
import { IMG } from '@/lib/images'

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-navy-950 pb-24 pt-32 sm:min-h-[92vh] lg:min-h-[94vh] lg:pt-36">
      <img
        src={IMG.hero}
        alt="Modern luxury villa with an infinity pool at dusk"
        className="absolute inset-0 h-full w-full animate-hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/45 to-navy-950/85" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_35%,rgba(6,24,41,0.55)_100%)]"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow animate-fade-up justify-center" style={{ animationDelay: '40ms' }}>
            <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
            Luxury Real Estate
          </p>

          <h1
            className="animate-fade-up mt-6 font-display text-[2.4rem] font-bold leading-[1.06] tracking-tight text-white text-shadow-hero sm:text-6xl lg:text-[4.1rem]"
            style={{ animationDelay: '140ms' }}
          >
            Discover Exceptional
            <br className="hidden sm:block" /> Homes &amp; Investments
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: '280ms' }}
          >
            Premium properties in prime locations. Find your dream home or the perfect investment with
            confidence.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '420ms' }}
          >
            <Button
              to="/properties"
              size="lg"
              variant="white"
              icon={<ArrowRightIcon className="h-4 w-4" />}
            >
              Explore Properties
            </Button>
            <Button to="/contact" size="lg" variant="outlineLight">
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-white/60 transition-colors duration-300 hover:text-white sm:flex"
        aria-label="Scroll to the about section"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-label">Scroll</span>
        <ChevronDownIcon className="h-4 w-4" />
      </a>
    </section>
  )
}
