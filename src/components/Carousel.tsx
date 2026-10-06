import { useRef, useState, useCallback, useEffect, type ReactNode } from 'react'

interface CarouselProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
}

export default function Carousel({ children, className = '', itemClassName = '' }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 5)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5)
  }, [])

  useEffect(() => {
    updateScrollButtons()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollButtons, { passive: true })
    window.addEventListener('resize', updateScrollButtons)
    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [updateScrollButtons])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.7
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    setIsDragging(true)
    setHasMoved(false)
    setStartX(e.pageX - el.offsetLeft)
    setScrollLeft(el.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const el = scrollRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - startX
    if (Math.abs(walk) > 5) setHasMoved(true)
    el.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const el = scrollRef.current
    if (!el) return
    setStartX(e.touches[0].pageX - el.offsetLeft)
    setScrollLeft(el.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const el = scrollRef.current
    if (!el) return
    const x = e.touches[0].pageX - el.offsetLeft
    const walk = x - startX
    el.scrollLeft = scrollLeft - walk
  }

  return (
    <div className={`relative ${className}`}>
      {/* Navigation buttons */}
      <div className="hidden md:flex absolute -top-16 right-0 gap-2">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="flex items-center justify-center w-11 h-11 rounded-full border border-navy-dark/15 text-navy-dark hover:bg-navy-dark hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          aria-label="Previous properties"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="flex items-center justify-center w-11 h-11 rounded-full border border-navy-dark/15 text-navy-dark hover:bg-navy-dark hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          aria-label="Next properties"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div
        ref={scrollRef}
        className={`flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className={`shrink-0 snap-start ${itemClassName} ${hasMoved ? 'pointer-events-none' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
