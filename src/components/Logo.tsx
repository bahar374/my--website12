type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-navy' : 'text-white'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
        <path d="M5.5 27.5h25" stroke="#C5A059" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10.5 27.5V9.5h8.5v18" stroke="#C5A059" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M19 27.5V15.5h6.5v12" stroke="#C5A059" strokeWidth="1.6" strokeLinejoin="round" />
        <path
          d="M13 13.5h3M13 17.5h3M13 21.5h3M21.8 19h1.9M21.8 23h1.9"
          stroke="#C5A059"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-[0.82rem] font-bold uppercase leading-none tracking-[0.16em] sm:text-[0.88rem] ${textColor}`}
      >
        Horizon&nbsp;Properties
      </span>
    </span>
  )
}
