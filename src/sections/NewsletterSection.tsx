import NewsletterForm from '../components/NewsletterForm'
import ScrollReveal from '../components/ScrollReveal'
import { Bee, FlowerCluster, LeafSprig } from '../components/Decor'

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="relative overflow-hidden bg-mint section-pad">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <LeafSprig className="absolute left-4 top-8 h-16 w-32 opacity-60 sm:left-10 sm:top-10" />
        <LeafSprig className="absolute bottom-6 right-4 h-16 w-32 -scale-x-100 opacity-60 sm:right-10" />
        <FlowerCluster className="absolute -bottom-4 left-2 h-28 w-32 opacity-50 sm:left-8" />
        <FlowerCluster className="absolute -top-2 right-2 h-28 w-32 -scale-x-100 opacity-50 sm:right-8" />
        <Bee className="absolute right-[28%] top-6 hidden h-9 w-11 animate-bee-drift sm:block" />
      </div>

      <div className="container-x relative">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-section">عضویت در خبرنامه</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75 sm:text-base">
              از محصولات جدید، مطالب آموزشی و پیشنهادهای ویژه باخبر شوید.
            </p>
            <div className="mx-auto mt-7 max-w-xl">
              <NewsletterForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
