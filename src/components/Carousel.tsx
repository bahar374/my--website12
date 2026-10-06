import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

type CarouselProps = {
  children: ReactNode
  ariaLabel: string
  className?: string
  trackClassName?: string
}

/**
 * Horizontal, snap-scrolling carousel with pointer drag, touch swipe,
 * keyboard support and previous/next controls.
 */
export default function Carousel({ children, ariaLabel, className = '', trackClassName = '' }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const measure = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  const scrollByDirection = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const amount = Math.max(300, el.clientWidth * 0.82)
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el || event.pointerType !== 'mouse' || event.button !== 0) return
    drag.current = { active: true, startX: event.clientX, startScroll: el.scrollLeft, moved: 0 }
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el || !drag.current.active) return
    const delta = event.clientX - drag.current.startX
    if (Math.abs(delta) > 5) {
      drag.current.moved = Math.max(drag.current.moved, Math.abs(delta))
      el.classList.add('dragging')
      if (!el.hasPointerCapture(event.pointerId)) el.setPointerCapture(event.pointerId)
    }
    el.scrollLeft = drag.current.startScroll - delta
  }

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    el.classList.remove('dragging')
    if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId)
    drag.current.active = false
  }

  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved > 8) {
      event.preventDefault()
      event.stopPropagation()
    }
    drag.current.moved = 0
  }

  return (
    <div className={`relative ${className}`.trim()}>
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`carousel-track no-scrollbar flex cursor-grab select-none gap-5 overflow-x-auto pb-2 sm:gap-6 ${trackClassName}`.trim()}
      >
        {children}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByDirection(-1)}
          disabled={atStart}
          aria-label="Previous properties"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-soft transition-all duration-300 ease-premium hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-navy/15 disabled:hover:bg-white disabled:hover:text-navy"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByDirection(1)}
          disabled={atEnd}
          aria-label="Next properties"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-soft transition-all duration-300 ease-premium hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-navy/15 disabled:hover:bg-white disabled:hover:text-navy"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
