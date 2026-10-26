import ScrollReveal from '../components/ScrollReveal'
import { Bee, BeeFlight } from '../components/Decor'
import { QualitySealIcon, ShieldCheckIcon, TagIcon, TruckIcon } from '../components/Icons'
import { benefits } from '../data/products'

const benefitIcons = {
  tag: TagIcon,
  truck: TruckIcon,
  shield: ShieldCheckIcon,
  quality: QualitySealIcon,
} as const

export default function BenefitsBar() {
  return (
    <section id="benefits" aria-label="مزیت‌های خرید از عسلستان" className="relative border-b border-line bg-cream">
      <div className="container-x relative py-7 sm:py-9">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden items-center justify-between lg:flex">
          <BeeFlight className="ms-2 h-10 w-40 -scale-x-100 opacity-60" />
          <Bee className="me-6 h-9 w-11 animate-bee-float" />
        </div>

        <ul className="relative grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-4 lg:gap-x-0">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[benefit.icon]
            return (
              <li key={benefit.id} className={`lg:px-6 ${index > 0 ? 'lg:border-r lg:border-line' : ''}`}>
                <ScrollReveal delay={index * 70}>
                  <div className="flex flex-col items-center gap-2.5 text-center lg:flex-row lg:gap-3.5 lg:text-right">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-honey-soft text-honey-dark">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-forest sm:text-base">{benefit.title}</h3>
                      <p className="mt-1 text-xs leading-6 text-ink/70 sm:text-sm">{benefit.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
