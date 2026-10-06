import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { BuildingIcon, ShieldIcon, SparkIcon, UsersIcon } from '@/components/Icons'
import { IMG } from '@/lib/images'

const REASONS = [
  {
    icon: ShieldIcon,
    title: 'Advice, not sales',
    text: 'We measure every recommendation against your interests — never a transaction.',
  },
  {
    icon: BuildingIcon,
    title: 'Architectural expertise',
    text: 'Deep knowledge of design-led homes and the buyers who value them.',
  },
  {
    icon: SparkIcon,
    title: 'Off-market access',
    text: 'A private network that surfaces exceptional properties long before they are listed.',
  },
  {
    icon: UsersIcon,
    title: 'One full-service team',
    text: 'Advisory, marketing, legal and relocation delivered under a single roof.',
  },
]

const STATS = [
  { value: '$2.4B', label: 'Transacted since 2007' },
  { value: '1,200+', label: 'Homes placed' },
  { value: '18', label: 'Years of expertise' },
  { value: '98%', label: 'Client retention' },
]

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <img
        src={IMG.whyChoose}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/92 to-navy-950" />

      <div className="container section relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Why Horizon"
            title="Why Choose Horizon"
            description="A private office approach to prime residential — measured, discreet and relentlessly thorough."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80}>
              <div className="h-full border-t border-white/15 pt-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-champagne/40 text-champagne">
                  <reason.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-3xl font-bold text-white lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[0.68rem] uppercase tracking-label text-white/50">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
