import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'
import { HoneycombCluster } from '../components/Decor'
import { products } from '../data/products'

export default function BestSellers() {
  return (
    <section id="products" className="bg-cream pb-12 pt-4 sm:pb-16 lg:pb-20">
      <div className="container-x">
        <ScrollReveal>
          <header className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <HoneycombCluster className="h-7 w-7 text-honey" />
              <h2 className="text-section">محصولات پرفروش</h2>
              <HoneycombCluster className="h-7 w-7 -scale-x-100 text-honey" />
            </div>
            <p className="mt-2 text-sm leading-7 text-ink/65 sm:text-base">طعم طبیعی، انتخابی از دل کندو</p>
          </header>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 min-[900px]:mt-10 min-[900px]:grid-cols-4 min-[900px]:gap-5">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 70} className="h-full">
              <div className="h-full">
                <ProductCard product={product} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
