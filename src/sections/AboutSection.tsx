import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/Icons'
import { IMG } from '@/lib/images'

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
            About Us
          </p>

          <h2 className="mt-5 text-[1.9rem] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.7rem]">
            Who We Are
          </h2>

          <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-ink-soft">
            At Horizon Properties, we connect people with extraordinary homes and smart investments.
            Integrity, transparency, and client satisfaction are at the heart of everything we do.
          </p>

          <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-ink-soft">
            From discreet off-market listings to landmark developments, our advisors bring two decades of
            insight to every mandate — and a genuine commitment to getting the details right.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Button to="/about" icon={<ArrowRightIcon className="h-4 w-4" />}>
              Learn More
            </Button>
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-bold text-navy">18+</span>
              <span className="max-w-[7.5rem] text-[0.8rem] leading-snug text-ink-soft">
                years of quiet expertise
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="grid grid-cols-5 gap-4 sm:gap-5">
            <div className="col-span-3 overflow-hidden rounded-2.5xl">
              <img
                src={IMG.aboutPrimary}
                alt="Modern luxury home with a pool and landscaped garden"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-premium hover:scale-105"
              />
            </div>
            <div className="col-span-2 self-end overflow-hidden rounded-2.5xl">
              <img
                src={IMG.aboutSecondary}
                alt="Contemporary architectural interior detail"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-premium hover:scale-105"
              />
            </div>
          </div>

          <Link
            to="/properties"
            aria-label="Browse our properties"
            className="absolute -bottom-6 left-1/2 inline-flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-navy text-white shadow-lift transition-all duration-300 ease-premium hover:-translate-y-1 hover:bg-champagne hover:text-navy"
          >
            <ArrowUpRightIcon className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
