import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '../components/Icons'
import { LeafSprig } from '../components/Decor'
import { testimonials } from '../data/products'

function usePerView() {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth
      setPerView(width >= 900 ? 3 : width >= 640 ? 2 : 1)
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

  const goPrev = () => setPage((value) => Math.max(0, value - 1))
  const goNext = () => setPage((value) => Math.min(maxPage, value + 1))

  return (
    <section id="testimonials" className="bg-cream pb-12 pt-2 sm:pb-16 lg:pb-20">
      <div className="container-x">
        <ScrollReveal>
          <header className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <LeafSprig className="h-6 w-12 -scale-x-100 text-honey" />
              <h2 className="text-section">نظرات مشتریان</h2>
              <LeafSprig className="h-6 w-12 text-honey" />
            </div>
          </header>
        </ScrollReveal>

        <div className="relative mt-8">
          <button
            type="button"
            onClick={goPrev}
            disabled={current === 0}
            aria-label="نظر قبلی"
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-warm text-forest transition-colors duration-200 hover:border-honey hover:text-honey-dark disabled:cursor-not-allowed disabled:opacity-40 min-[900px]:-right-9 min-[900px]:inline-flex xl:-right-14"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div className="grid gap-4 sm:grid-cols-2 min-[900px]:grid-cols-3 min-[900px]:gap-5">
            {visible.map((item) => (
              <article
                key={item.id}
                className="flex animate-rise-in flex-col gap-3 rounded-[1.1rem] border border-line bg-white p-5 text-right shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-[0.7rem] font-bold text-forest">
                    {item.initials}
                  </span>
                  <span className="text-sm font-bold text-forest sm:text-[0.95rem]">{item.name}</span>
                </div>

                <p className="text-sm leading-7 text-ink/80">{item.text}</p>

                <div className="mt-auto flex items-center gap-0.5 text-honey" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} filled={star <= item.rating} className="h-4 w-4" />
                  ))}
                </div>
                <span className="sr-only">امتیاز {item.rating.toLocaleString('fa-IR')} از ۵</span>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={current === maxPage}
            aria-label="نظر بعدی"
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-warm text-forest transition-colors duration-200 hover:border-honey hover:text-honey-dark disabled:cursor-not-allowed disabled:opacity-40 min-[900px]:-left-9 min-[900px]:inline-flex xl:-left-14"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={current === 0}
            aria-label="نظر قبلی"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-warm text-forest transition-colors duration-200 hover:border-honey disabled:cursor-not-allowed disabled:opacity-40 min-[900px]:hidden"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: dots }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`گروه نظر ${(index + 1).toLocaleString('fa-IR')}`}
                aria-current={index === current}
                className={`h-2.5 rounded-full transition-all duration-300 ease-soft ${
                  index === current ? 'w-2.5 bg-honey' : 'w-2.5 bg-line hover:bg-honey/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={current === maxPage}
            aria-label="نظر بعدی"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-warm text-forest transition-colors duration-200 hover:border-honey disabled:cursor-not-allowed disabled:opacity-40 min-[900px]:hidden"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
