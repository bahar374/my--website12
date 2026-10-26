import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'
import { HoneycombCluster } from '../components/Decor'
import { products } from '../data/products'

export default function BestSellers() {
  return (
    <section id="products" className="section-pad bg-cream">
      <div className="container-x">
        <ScrollReveal>
          <header className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <HoneycombCluster className="hidden h-8 w-8 text-honey sm:block" />
              <h2 className="text-section">محصولات پرفروش</h2>
              <HoneycombCluster className="hidden h-8 w-8 -scale-x-100 text-honey sm:block" />
            </div>
            <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">طعم طبیعی، انتخابی از دل کندو</p>
          </header>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 70} className="h-full">
              <div className="h-full">
                <ProductCard product={product} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink/55 sm:text-sm">
          قیمت‌ها و اطلاعات محصولات نمونه هستند و از یک آرایه داده در فرانت‌اند خوانده می‌شوند.
        </p>
      </div>
    </section>
  )
}
