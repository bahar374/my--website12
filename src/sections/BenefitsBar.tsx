import { CreditCardIcon, QualitySealIcon, ShieldCheckIcon, TagIcon, TruckIcon } from '../components/Icons'
import { benefits } from '../data/products'

const benefitIcons = {
  tag: TagIcon,
  truck: TruckIcon,
  shield: ShieldCheckIcon,
  payment: CreditCardIcon,
  quality: QualitySealIcon,
} as const

function TrailDecoration({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" className="hidden w-[120px] shrink-0 justify-center min-[820px]:flex">
      <svg viewBox="0 0 120 40" className="w-[100px] overflow-visible">
        <path
          d={flip ? 'M118 30c-30-12-60 6-96-14' : 'M2 30c30-12 60 6 96-14'}
          fill="none"
          stroke="#F5AC18"
          strokeDasharray="4 5"
          strokeWidth="1.4"
        />
        <circle cx={flip ? 16 : 104} cy="14" r="6" fill="#F5AC18" />
      </svg>
    </div>
  )
}

export default function BenefitsBar() {
  return (
    <section id="benefits" aria-label="مزیت‌های خرید از عسلستان" className="relative z-[7] bg-cream pb-[34px] pt-[18px]">
      <div className="container-x flex flex-wrap items-center justify-center">
        <TrailDecoration />

        {benefits.map((benefit) => {
          const Icon = benefitIcons[benefit.icon]
          return (
            <div
              key={benefit.id}
              className="w-1/2 shrink-0 px-1.5 py-3 text-center min-[820px]:w-auto min-[820px]:max-w-[250px] min-[820px]:flex-1 min-[820px]:border-s min-[820px]:border-honey/35 min-[820px]:px-3.5 min-[820px]:py-1.5"
            >
              <Icon className="mx-auto h-[30px] w-[30px] text-honey" />
              <b className="mt-1.5 block text-[15px] font-bold text-forest">{benefit.title}</b>
              <span className="mt-0.5 block text-[11.5px] text-[#5c6f63]">{benefit.text}</span>
            </div>
          )
        })}

        <TrailDecoration flip />
      </div>
    </section>
  )
}
