import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`.trim()}>
      {eyebrow && (
        <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
          <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-5 text-[1.85rem] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          light ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[0.98rem] leading-relaxed ${light ? 'text-white/70' : 'text-ink-soft'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
