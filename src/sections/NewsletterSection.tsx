import NewsletterForm from '../components/NewsletterForm'
import ScrollReveal from '../components/ScrollReveal'
import { FlowerCluster, LeafSprig } from '../components/Decor'

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="relative overflow-hidden bg-cream py-12 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <LeafSprig className="absolute -left-2 top-6 h-16 w-32 opacity-70 sm:left-4 sm:top-8 sm:h-20 sm:w-40" />
        <LeafSprig className="absolute -right-2 bottom-4 h-16 w-32 -scale-x-100 opacity-70 sm:right-4 sm:bottom-6 sm:h-20 sm:w-40" />
        <FlowerCluster className="absolute -bottom-3 left-0 h-24 w-28 opacity-60 sm:left-6 sm:h-28 sm:w-32" />
        <FlowerCluster className="absolute -top-2 right-0 h-24 w-28 -scale-x-100 opacity-60 sm:right-6 sm:h-28 sm:w-32" />
      </div>

      <div className="container-x relative">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-section">عضویت در خبرنامه</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75 sm:text-base">
              از تخفیف‌های ویژه، محصولات جدید و آموزش‌های مفید باخبر شوید.
            </p>
            <div className="mx-auto mt-6 max-w-xl sm:mt-7">
              <NewsletterForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
