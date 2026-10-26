import ScrollReveal from '../components/ScrollReveal'
import { LeafSprig } from '../components/Decor'
import {
  ChevronLeftIcon,
  HoneyDipperIcon,
  HoneycombIcon,
  LeafIcon,
  QualitySealIcon,
  ShieldCheckIcon,
} from '../components/Icons'
import { brandFeatures } from '../data/products'

const featureIcons = {
  shield: ShieldCheckIcon,
  leaf: LeafIcon,
  honeycomb: HoneycombIcon,
  quality: QualitySealIcon,
} as const

export default function BrandStory() {
  return (
    <section id="brand-story" className="bg-cream pb-12 sm:pb-16 lg:pb-20">
      <div className="container-x">
        <ScrollReveal>
          <div className="rounded-xl2 border border-line bg-[#F9F7F1] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid items-center gap-8 min-[900px]:grid-cols-[0.95fr_1.2fr_0.95fr] min-[900px]:gap-8">
              {/* feature list — right column on desktop */}
              <ul className="order-3 space-y-4 min-[900px]:order-1 min-[900px]:border-e min-[900px]:border-line min-[900px]:pe-6">
                {brandFeatures.map((feature) => {
                  const Icon = featureIcons[feature.icon]
                  return (
                    <li
                      key={feature.id}
                      className="flex items-center justify-center gap-3 text-center min-[900px]:justify-start min-[900px]:text-right"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-forest" />
                      <span className="text-xs font-semibold text-ink sm:text-sm">{feature.title}</span>
                    </li>
                  )
                })}
              </ul>

              {/* copy — center column on desktop */}
              <div className="order-2 text-center min-[900px]:text-right">
                <h2 className="flex items-center justify-center gap-2 text-section min-[900px]:justify-start">
                  داستان عسلستان
                  <HoneyDipperIcon className="h-6 w-6 shrink-0 text-honey" />
                </h2>
                <p className="mt-4 text-sm leading-7 text-ink/80 sm:text-base sm:leading-8">
                  عسلستان از دل طبیعت، با عشق به این سرزمین متولد شد؛ ما با تکیه بر کیفیت، اصالت و احترام به زنبورها،
                  بهترین عسل‌های طبیعی را برای شما فراهم می‌کنیم.
                </p>
                <a href="#contact" className="btn-primary mt-6 self-start">
                  بیشتر بخوانید
                  <ChevronLeftIcon className="h-4 w-4" />
                </a>
              </div>

              {/* image — left column on desktop */}
              <div className="relative order-1 mx-auto w-full max-w-[16rem] min-[900px]:order-3 min-[900px]:max-w-none">
                <span
                  aria-hidden="true"
                  className="absolute -inset-2 rotate-3 rounded-[46%_54%_48%_52%/48%_46%_54%_52%] border border-dashed border-honey/60"
                />
                <img
                  src="/images/story-jar.jpg"
                  alt="شیشه عسل طبیعی در کنار شان عسل و برگ‌های تازه"
                  loading="lazy"
                  decoding="async"
                  className="relative aspect-square w-full rounded-[54%_46%_52%_48%/46%_54%_46%_54%] object-cover shadow-card"
                />
                <LeafSprig className="absolute -bottom-3 left-0 h-12 w-24 rotate-12 opacity-80" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
