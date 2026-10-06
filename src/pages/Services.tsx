import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/sections/CTASection'
import { ArrowRightIcon, CheckIcon } from '@/components/Icons'
import { SERVICES } from '@/data/services'
import { IMG } from '@/lib/images'

const PROCESS = [
  { step: '01', title: 'Listen', text: 'A long first conversation about what you actually want — not a brief.' },
  { step: '02', title: 'Curate', text: 'A shortlist of properties, including off-market options that never appear publicly.' },
  { step: '03', title: 'Advise', text: 'Independent guidance on value, condition and negotiation before you commit.' },
  { step: '04', title: 'Deliver', text: 'We manage the transaction end to end, keeping every party informed and on schedule.' },
]

export default function Services() {
  return (
    <>
      <PageHeader
        image={IMG.whyChoose}
        eyebrow="Services"
        title="Advisory for Every Stage of Ownership"
        description="Six disciplines, delivered by one senior team — from first search to long-term portfolio stewardship."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="section bg-white">
        <div className="container space-y-16 lg:space-y-24">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id}>
              <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-3">
                  <span className="font-display text-sm font-semibold tracking-[0.24em] text-champagne">
                    {service.index}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-[1.9rem]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">{service.description}</p>
                </div>

                <div className="lg:col-span-4">
                  <ul className="space-y-3.5 rounded-2.5xl border border-navy/10 bg-stone p-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-navy">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              {index < SERVICES.length - 1 && <div className="mt-16 h-px w-full bg-navy/10 lg:mt-24" />}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-navy-950">
        <div className="container">
          <Reveal>
            <SectionHeading
              light
              eyebrow="How We Work"
              title="A Measured, Four-Step Process"
              description="Deliberate from the first conversation to the final signature."
            />
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, index) => (
              <Reveal key={item.step} delay={index * 80}>
                <div className="border-t border-white/15 pt-6">
                  <span className="font-display text-sm font-semibold tracking-[0.24em] text-champagne">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14 flex justify-center">
              <Button
                to="/contact"
                variant="champagne"
                size="lg"
                icon={<ArrowRightIcon className="h-4 w-4" />}
              >
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
