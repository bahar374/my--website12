import { Bee, BeeFlight, FlowerCluster } from '../components/Decor'
import { CartIcon, LeafIcon } from '../components/Icons'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div className="relative min-h-[29rem] w-full sm:min-h-[32rem] md:min-h-[36rem]">
        <img
          src="/images/hero-scene.jpg"
          alt="کندوهای چوبی و زنبورداران در چراگاهی پر از گل‌های وحشی"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* mobile: even veil so the dark text stays readable over the photo */}
        <div aria-hidden="true" className="absolute inset-0 bg-cream/80 sm:hidden" />
        {/* desktop: cream scrim only over the text side, photo stays clear */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,#FFF9ED_0%,rgba(255,249,237,0.88)_26%,rgba(255,249,237,0)_60%)] sm:block"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />

        <div className="container-x relative flex min-h-[29rem] items-center justify-end py-14 sm:min-h-[32rem] md:min-h-[36rem]">
          <div className="w-full max-w-xl text-right">
            <span className="eyebrow">
              از دل طبیعت، خالص و ناب
              <Bee className="h-4 w-6" />
            </span>

            <h1 className="mt-5 text-hero">شیرینی اصل طبیعت</h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-ink/80 sm:text-base sm:leading-8 md:ms-auto">
              عسل طبیعی عسلستان از چراگاه‌های کوهستانی و گل‌های وحشی به دست می‌آید؛ با بسته‌بندی مناسب و اطلاعات شفاف روی هر
              محصول.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
              <a href="#products" className="btn-primary">
                <CartIcon className="h-[1.15rem] w-[1.15rem]" />
                مشاهده محصولات
              </a>
              <a href="#brand-story" className="btn-outline">
                <LeafIcon className="h-[1.15rem] w-[1.15rem]" />
                داستان ما
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute bottom-6 left-6 hidden items-end gap-1 lg:flex">
          <FlowerCluster className="h-24 w-28 opacity-70" />
          <BeeFlight className="mb-8 h-12 w-40 opacity-70" />
          <Bee className="mb-16 h-9 w-11 animate-bee-drift" />
        </div>
      </div>
    </section>
  )
}
