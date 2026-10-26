import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '../components/Icons'
import { Bee } from '../components/Decor'
import { testimonials } from '../data/products'

function usePerView() {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth
      setPerView(width >= 1024 ? 3 : width >= 640 ? 2 : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return perView
}

export default function Testimonials() {
  const perView = usePerView()
  const [page, setPage] = useState(0)

  const maxPage = Math.max(0, testimonials.length - perView)
  const current = Math.min(page, maxPage)
  const visible = testimonials.slice(current, current + perView)
  const dots = maxPage + 1

  useEffect(() => {
    setPage((value) => Math.min(value, maxPage))
  }, [maxPage])

  return (
    <section id="testimonials" className="section-pad bg-cream">
      <div className="container-x">
        <ScrollReveal>
          <header className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <Bee className="h-7 w-9" />
              <h2 className="text-section">نظرات مشتریان</h2>
              <Bee className="h-7 w-9 -scale-x-100" />
            </div>
            <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
              چند نمونه از تجربه‌هایی که برایمان نوشته‌اند.
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {visible.map((item) => (
            <article
              key={item.id}
              className="card-surface flex h-full animate-rise-in flex-col gap-3 p-5 text-center sm:p-6"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-xs font-bold text-warm">
                  {item.initials}
                </span>
                <span className="text-sm font-bold text-forest sm:text-base">{item.name}</span>
              </div>

              <div className="flex items-center justify-center gap-0.5 text-honey" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= item.rating} className="h-4 w-4" />
                ))}
              </div>
              <span className="sr-only">امتیاز {item.rating.toLocaleString('fa-IR')} از ۵</span>

              <p className="text-sm leading-7 text-ink/80">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(0, value - 1))}
            disabled={current === 0}
            aria-label="نظر قبلی"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-warm text-forest transition-colors duration-200 hover:border-honey disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: dots }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`نمایش نظرات ${index + 1}`}
                aria-current={index === current}
                className={`h-2.5 rounded-full transition-all duration-300 ease-soft ${
                  index === current ? 'w-7 bg-honey' : 'w-2.5 bg-forest/25 hover:bg-forest/40'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((value) => Math.min(maxPage, value + 1))}
            disabled={current === maxPage}
            aria-label="نظر بعدی"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-warm text-forest transition-colors duration-200 hover:border-honey disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-ink/55 sm:text-sm">
          نظرات بالا نمونه هستند و بازخورد واقعی مشتریان محسوب نمی‌شوند.
        </p>
      </div>
    </section>
  )
}
