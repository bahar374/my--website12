import ScrollReveal from '../components/ScrollReveal'
import { ChevronLeftIcon } from '../components/Icons'

export default function GiftBanner() {
  return (
    <section className="bg-cream pb-12 sm:pb-16 lg:pb-20">
      <div className="container-x">
        <ScrollReveal>
          <article className="relative overflow-hidden rounded-xl2 border border-honey/40 bg-[radial-gradient(circle_at_50%_50%,#FFD979_0%,#F5AC18_70%,#EFA013_100%)] shadow-honey">
            <span aria-hidden="true" className="hex-pattern absolute inset-0 opacity-20" />

            <div className="relative flex flex-col md:grid md:grid-cols-2 md:items-stretch">
              <div className="relative order-1 md:order-2">
                <img
                  src="/images/banner-gift.jpg"
                  alt="جعبه هدیه چوبی همراه با شیشه‌های عسل و خوراکی‌های طبیعی"
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-[17rem]"
                />
              </div>

              <div className="order-2 flex flex-col justify-center gap-3 p-6 sm:p-8 md:order-1 md:p-10 lg:p-12">
                <h2 className="text-section text-forest-deep">پک‌های ویژه عسلستان</h2>
                <p className="max-w-md text-sm leading-7 text-forest-deep/85 sm:text-base sm:leading-8">
                  طعم‌های متنوع برای تمام سلیقه‌ها
                </p>
                <a
                  href="#products"
                  className="btn-base mt-1 self-start bg-forest-deep text-warm shadow-soft hover:bg-forest active:translate-y-px"
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
