import ScrollReveal from '../components/ScrollReveal'
import { Bee, BeeFlight } from '../components/Decor'
import { ChevronLeftIcon } from '../components/Icons'

export default function StoryBanner() {
  return (
    <section className="bg-cream pb-7 sm:pb-8">
      <div className="container-x">
        <ScrollReveal>
          <article className="relative overflow-hidden rounded-xl2 border border-line bg-warm shadow-soft">
            <div className="flex flex-col md:grid md:grid-cols-2 md:items-stretch">
              <div className="relative order-1 md:order-2">
                <img
                  src="/images/banner-beekeeper.jpg"
                  alt="زنبوردار در حال بررسی شان عسل در چراگاه"
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-[20rem]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-transparent to-cream/25" />
              </div>

              <div className="relative order-2 flex flex-col justify-center gap-4 p-6 sm:p-8 md:order-1 md:p-10 lg:p-12">
                <BeeFlight className="pointer-events-none absolute left-6 top-4 hidden h-12 w-40 opacity-50 lg:block" />
                <h2 className="flex items-center gap-2 text-section">
                  عسل، هدیه‌ای از دل طبیعت
                  <Bee className="h-7 w-9 shrink-0" />
                </h2>
                <p className="max-w-md text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
                  پشت هر قطره عسل، دنیایی از تلاش زنبورها، زیبایی گل‌ها و شگفتی طبیعت قرار دارد.
                </p>
                <a href="#brand-story" className="btn-primary self-start">
                  داستان ما را بخوانید
                  <ChevronLeftIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  )
}
