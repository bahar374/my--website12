import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import CTASection from '@/sections/CTASection'
import { MailIcon, PhoneIcon } from '@/components/Icons'
import { TEAM } from '@/data/team'

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Senior Advisors, Personally Accountable"
        description="Every mandate is led by a senior advisor — the same person you meet at the first viewing will be with you at the closing."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Team' }]}
      />

      <section className="section bg-white">
        <div className="container grid gap-10 sm:grid-cols-2 lg:gap-12">
          {TEAM.map((member, index) => (
            <Reveal key={member.id} delay={index * 70}>
              <article className="group flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="w-full overflow-hidden rounded-2.5xl bg-sand sm:w-48 sm:shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-display text-xl font-bold text-navy">{member.name}</h2>
                  <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-label text-champagne">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{member.bio}</p>

                  <div className="mt-5 flex flex-col gap-2.5 text-sm">
                    <a
                      href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-2.5 text-navy transition-colors duration-300 hover:text-champagne"
                    >
                      <PhoneIcon className="h-4 w-4 text-champagne" />
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2.5 break-all text-navy transition-colors duration-300 hover:text-champagne"
                    >
                      <MailIcon className="h-4 w-4 shrink-0 text-champagne" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
