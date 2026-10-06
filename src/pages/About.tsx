import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/sections/CTASection'
import TeamSection from '@/sections/TeamSection'
import { AwardIcon, CheckIcon, ShieldIcon, SparkIcon } from '@/components/Icons'
import { IMG } from '@/lib/images'

const VALUES = [
  {
    icon: ShieldIcon,
    title: 'Integrity first',
    text: 'We advise as if the outcome were our own — and we say no when a deal is not right.',
  },
  {
    icon: SparkIcon,
    title: 'Design literate',
    text: 'We understand architecture, materials and the craft behind a genuinely exceptional home.',
  },
  {
    icon: AwardIcon,
    title: 'Quietly relentless',
    text: 'Patient, discreet representation that pursues the right result, not the fastest one.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Private Office for Exceptional Property"
        description="Founded in 2007, Horizon Properties represents a small number of clients each year — carefully, discreetly and without compromise."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <section className="section bg-white">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built on Relationships, Not Listings"
            />
            <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-ink-soft">
              Horizon Properties began with a simple conviction: that buying or selling an exceptional home
              deserves the same care as designing one. We built a practice around fewer clients, deeper
              relationships and a standard of service closer to a private office than a brokerage.
            </p>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-ink-soft">
              Nearly two decades later, that conviction still shapes every mandate we accept — from a
              lakeside villa in Austin to a cliff-top estate on the Pacific.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                'Over $2.4B transacted since 2007',
                'A senior advisor on every mandate, start to finish',
                'A private network spanning 14 countries',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-2.5xl">
              <img
                src={IMG.aboutPrimary}
                alt="A modern luxury home with a swimming pool"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-premium hover:scale-105"
              />
            </div>
            <div className="mt-5 overflow-hidden rounded-2.5xl">
              <img
                src={IMG.aboutSecondary}
                alt="Contemporary interior with natural light"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-premium hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title="What We Stand For"
              description="Three principles that keep our advice honest and our standards high."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-2.5xl border border-navy/10 bg-white p-8 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-champagne">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-navy">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <CTASection />
    </>
  )
}
