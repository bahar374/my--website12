import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { ArrowRightIcon, MailIcon, PhoneIcon } from '@/components/Icons'
import { TEAM } from '@/data/team'

export default function TeamSection() {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind Horizon"
            description="A small, senior team — each advisor personally accountable for every mandate they take on."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <Reveal key={member.id} delay={index * 70}>
              <article className="group">
                <div className="overflow-hidden rounded-2.5xl bg-sand">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-navy">{member.name}</h3>
                <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-label text-champagne">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>

                <div className="mt-4 flex items-center gap-2.5">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 ease-premium hover:border-navy hover:bg-navy hover:text-white"
                  >
                    <MailIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                    aria-label={`Call ${member.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 ease-premium hover:border-navy hover:bg-navy hover:text-white"
                  >
                    <PhoneIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/team" variant="outline" icon={<ArrowRightIcon className="h-4 w-4" />}>
            Meet the Full Team
          </Button>
        </div>
      </div>
    </section>
  )
}
