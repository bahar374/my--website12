import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExpandIcon } from './Icons'

type ImageGalleryProps = {
  images: string[]
  title: string
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

  const step = (direction: 1 | -1) =>
    setActive((current) => (current + direction + images.length) % images.length)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'ArrowRight') setActive((i) => (i + 1) % images.length)
      if (event.key === 'ArrowLeft') setActive((i) => (i - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, images.length])

  const navClass =
    'inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-soft backdrop-blur transition-all duration-300 ease-premium hover:bg-white'

  return (
    <div>
      <div className="relative overflow-hidden rounded-2.5xl">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full"
          aria-label="Open fullscreen gallery"
        >
          <img
            src={images[active]}
            alt={`${title} — image ${active + 1} of ${images.length}`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.02]"
          />
        </button>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-navy-950/10" />

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-[0.68rem] font-medium text-navy backdrop-blur transition-colors duration-300 hover:bg-white"
        >
          <ExpandIcon className="h-3.5 w-3.5" />
          View gallery
        </button>

        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-medium text-navy backdrop-blur">
          {active + 1} / {images.length}
        </span>

        <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
          <button type="button" onClick={() => step(-1)} aria-label="Previous image" className={navClass}>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
          <button type="button" onClick={() => step(1)} aria-label="Next image" className={navClass}>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === active}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ease-premium ${
              index === active
                ? 'border-champagne opacity-100'
                : 'border-transparent opacity-55 hover:opacity-100'
            }`}
          >
            <img src={src} alt="" loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — fullscreen gallery`}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-navy"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
            aria-label="Previous image"
            className="absolute left-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-navy sm:left-8"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <img
            src={images[active]}
            alt={`${title} — image ${active + 1} of ${images.length}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[86vh] max-w-[92vw] rounded-xl object-contain shadow-lift"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
            aria-label="Next image"
            className="absolute right-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-navy sm:right-8"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  )
}
