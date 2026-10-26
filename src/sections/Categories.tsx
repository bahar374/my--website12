import ScrollReveal from '../components/ScrollReveal'
import { ChevronLeftIcon } from '../components/Icons'
import { categories } from '../data/products'

export default function Categories() {
  return (
    <section id="categories" className="section-pad bg-warm">
      <div className="container-x">
        <ScrollReveal>
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-section">دسته‌بندی محصولات عسلستان</h2>
            <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
              از عسل‌های تک‌گل و کوهستانی تا پک‌های هدیه؛ دسته مورد نظرتان را انتخاب کنید.
            </p>
          </header>
        </ScrollReveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {categories.map((category, index) => (
            <li key={category.id}>
              <ScrollReveal delay={index * 60}>
                <a href="#products" className="group block">
                  <span className="relative block overflow-hidden rounded-xl2 border border-line bg-cream shadow-soft transition-all duration-300 ease-soft group-hover:-translate-y-1 group-hover:border-honey/60 group-hover:shadow-card">
                    <img
                      src={category.image}
                      alt={category.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                    />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#073D2C]/85 via-[#073D2C]/25 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 p-3 text-center text-sm font-bold text-warm drop-shadow sm:text-base">
                      {category.name}
                    </span>
                  </span>
                  <span className="mt-2.5 flex items-center justify-center gap-1 text-xs font-semibold text-forest transition-colors duration-200 group-hover:text-honey-dark sm:text-sm">
                    مشاهده محصولات
                    <ChevronLeftIcon className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:-translate-x-1" />
                  </span>
                </a>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
