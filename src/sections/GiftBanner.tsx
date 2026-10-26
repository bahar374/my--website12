import ScrollReveal from '../components/ScrollReveal'
import { ChevronLeftIcon, HoneyDipperIcon } from '../components/Icons'

export default function GiftBanner() {
  return (
    <section className="bg-cream pb-12 sm:pb-16 lg:pb-20">
      <div className="container-x">
        <ScrollReveal>
          <article className="relative overflow-hidden rounded-xl2 border border-honey/50 bg-gradient-to-r from-honey-light via-honey to-honey-light shadow-honey">
            <span aria-hidden="true" className="hex-pattern absolute inset-0 opacity-20" />
            <span
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-honey-light/80 to-transparent"
            />

            <div className="relative flex flex-col md:grid md:grid-cols-2 md:items-stretch">
              <div className="relative order-1 md:order-2">
                <img
                  src="/images/banner-gift.jpg"
                  alt="جعبه هدیه چوبی همراه با شیشه‌های عسل و خوراکی‌های طبیعی"
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-[20rem]"
                />
              </div>

              <div className="order-2 flex flex-col justify-center gap-4 p-6 sm:p-8 md:order-1 md:p-10 lg:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-forest-deep px-3.5 py-1.5 text-xs font-bold text-warm">
                  <HoneyDipperIcon className="h-4 w-4 text-honey" />
                  پیشنهاد ویژه
                </span>
                <h2 className="text-section text-forest-deep">پک‌های ویژه عسلستان</h2>
                <p className="max-w-md text-sm leading-7 text-forest-deep/85 sm:text-base sm:leading-8">
                  مجموعه‌ای از طعم‌های طبیعی، برای هدیه دادن و لذت بردن.
                </p>
                <a
                  href="#categories"
                  className="btn-base self-start bg-forest-deep text-warm shadow-soft hover:bg-forest active:translate-y-px"
                >
                  مشاهده بسته‌ها
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
