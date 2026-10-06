import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { ArrowUpRightIcon } from '@/components/Icons'
import { SERVICES } from '@/data/services'

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="Services"
            title="Everything a Considered Purchase Requires"
            description="Advisory, marketing and investment services delivered with the discretion of a private office."
          />
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {SERVICES.map((service, index) => (
              <li key={service.id}>
                <Reveal delay={index * 60}>
                  <Link
                    to="/services"
                    className="group grid gap-3 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8"
                  >
                    <span className="font-display text-[0.8rem] font-semibold tracking-[0.2em] text-champagne">
                      {service.index}
                    </span>

                    <div>
                      <h3 className="font-display text-xl font-bold text-navy transition-colors duration-300 group-hover:text-champagne">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                        {service.description}
                      </p>
                      <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.7rem] uppercase tracking-wider text-ink-soft/60">
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 ease-premium group-hover:border-navy group-hover:bg-navy group-hover:text-white sm:inline-flex">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
