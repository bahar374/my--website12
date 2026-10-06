import { useState, type FormEvent } from 'react'
import AgentCard from '@/components/AgentCard'
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/Icons'
import { CONTACT, SOCIALS } from '@/data/site'
import { TEAM } from '@/data/team'
import { IMG } from '@/lib/images'

const INTERESTS = ['Buying', 'Selling', 'Investment', 'Valuation', 'Relocation']

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        image={IMG.contact}
        eyebrow="Contact"
        title="Let’s Find the Right Property Together"
        description="Tell us what you are looking for and a senior advisor will be in touch within one business day."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section bg-stone">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-2.5xl border border-navy/10 bg-white p-7 shadow-soft sm:p-9">
                {sent ? (
                  <div className="py-10 text-center">
                    <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-champagne/20 text-champagne">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-5 font-display text-xl font-bold text-navy">Message received</h2>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                      Thank you for reaching out. A member of our team will respond personally within one
                      business day.
                    </p>
                    <Button onClick={() => setSent(false)} variant="outline" className="mt-7">
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="font-display text-xl font-bold text-navy">Send us a message</h2>
                      <p className="mt-2 text-sm text-ink-soft">
                        All enquiries are treated in the strictest confidence.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                          Full name
                        </label>
                        <input id="contact-name" required type="text" className="field mt-2" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                          Email
                        </label>
                        <input id="contact-email" required type="email" className="field mt-2" placeholder="jane@email.com" />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                          Phone
                        </label>
                        <input id="contact-phone" type="tel" className="field mt-2" placeholder="(555) 000-0000" />
                      </div>
                      <div>
                        <label htmlFor="contact-interest" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                          I am interested in
                        </label>
                        <select id="contact-interest" defaultValue={INTERESTS[0]} className="field mt-2">
                          {INTERESTS.map((interest) => (
                            <option key={interest} value={interest}>
                              {interest}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        className="field mt-2 resize-none"
                        placeholder="Tell us about the home or investment you have in mind."
                      />
                    </div>

                    <Button type="submit" size="lg" icon={<ArrowRightIcon className="h-4 w-4" />}>
                      Send message
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="rounded-2.5xl bg-navy-950 p-7 text-white/70 sm:p-9">
                <h2 className="font-display text-xl font-bold text-white">Horizon Properties</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Our office is open by appointment — we would be glad to welcome you.
                </p>

                <ul className="mt-7 space-y-5 text-sm">
                  <li className="flex items-start gap-3.5">
                    <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                    <a href={CONTACT.phoneHref} className="transition-colors duration-300 hover:text-white">
                      {CONTACT.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="break-all transition-colors duration-300 hover:text-white"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                    {CONTACT.address}
                  </li>
                  <li className="flex items-start gap-3.5">
                    <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                    {CONTACT.hours}
                  </li>
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-label text-champagne">
                    Follow
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {SOCIALS.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 transition-colors duration-300 hover:border-champagne hover:text-white"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">
              <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
              Direct Lines
            </p>
            <h2 className="mt-5 text-[1.85rem] font-bold leading-tight tracking-tight sm:text-4xl">
              Speak With an Advisor
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <Reveal key={member.id} delay={index * 70}>
                <AgentCard agent={member} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
