import ScrollReveal from '../components/ScrollReveal'
import { LeafSprig } from '../components/Decor'
import { CheckIcon, ChevronLeftIcon, HoneycombIcon, LeafIcon, QualitySealIcon, ShieldCheckIcon } from '../components/Icons'
import { brandFeatures } from '../data/products'

const featureIcons = {
  shield: ShieldCheckIcon,
  leaf: LeafIcon,
  honeycomb: HoneycombIcon,
  quality: QualitySealIcon,
} as const

export default function BrandStory() {
  return (
    <section id="brand-story" className="section-pad bg-mint">
      <div className="container-x">
        <ScrollReveal>
          <div className="card-surface grid items-center gap-8 p-6 sm:p-8 md:grid-cols-2 lg:gap-12 lg:p-12">
            {/* image — left column on desktop */}
            <div className="relative order-1 mx-auto w-full max-w-md md:order-2">
              <span
                aria-hidden="true"
                className="absolute -inset-3 -rotate-3 rounded-[46%_54%_48%_52%/48%_46%_54%_52%] border border-honey/50"
              />
              <img
                src="/images/story-jar.jpg"
                alt="شیشه عسل طبیعی در کنار شان عسل و برگ‌های تازه"
                loading="lazy"
                decoding="async"
                className="relative aspect-square w-full rounded-[54%_46%_52%_48%/46%_54%_46%_54%] object-cover shadow-card"
              />
              <LeafSprig className="absolute -bottom-4 left-2 h-14 w-28 rotate-12 opacity-80" />
            </div>

            {/* text — right column on desktop */}
            <div className="order-2 md:order-1">
              <h2 className="text-section">داستان عسلستان</h2>
              <p className="mt-4 text-sm leading-7 text-ink/80 sm:text-base sm:leading-8">
                عسلستان با علاقه به دنیای زنبورها و زیبایی طبیعت شکل گرفته است. ما می‌خواهیم انتخاب عسل را به تجربه‌ای دلنشین
                تبدیل کنیم و شما را با دنیای شگفت‌انگیز زنبورداری بیشتر آشنا کنیم.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {brandFeatures.map((feature) => {
                  const Icon = featureIcons[feature.icon]
                  return (
                    <li
                      key={feature.id}
                      className="flex items-center gap-3 rounded-card border border-line bg-warm px-3.5 py-3"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest">
                        <Icon className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                      <span className="text-xs font-semibold text-ink sm:text-sm">{feature.title}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-primary">
                  بیشتر درباره ما
                  <ChevronLeftIcon className="h-4 w-4" />
                </a>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-forest-soft sm:text-sm">
                  <CheckIcon className="h-4 w-4" />
                  تهیه مستقیم از زنبورداران محلی
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
