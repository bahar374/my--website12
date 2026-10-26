import { brand } from '../data/site'

type LogoProps = {
  variant?: 'dark' | 'light'
  withTagline?: boolean
  className?: string
}

export default function Logo({ variant = 'dark', withTagline = true, className = '' }: LogoProps) {
  const isLight = variant === 'light'
  const nameColor = isLight ? 'text-warm' : 'text-forest'
  const taglineColor = isLight ? 'text-honey' : 'text-honey-dark'

  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label={`${brand.name} — ${brand.tagline}`}>
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-300 ease-soft group-hover:-translate-y-0.5">
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <path d="M32 3l25 14.5v29L32 61 7 46.5v-29z" fill={isLight ? '#F5AC18' : '#104C36'} />
          <path d="M32 11l17.5 10.1v20.3L32 51.5 14.5 41.4V21.1z" fill={isLight ? '#073D2C' : '#F5AC18'} />
          <ellipse cx="32" cy="31" rx="8.2" ry="10.6" fill={isLight ? '#F5AC18' : '#104C36'} />
          <path
            d="M24 27.4h16M24 35h16"
            stroke={isLight ? '#073D2C' : '#F5AC18'}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <ellipse cx="22.4" cy="22" rx="6" ry="4" fill="#FFFDF7" opacity="0.85" transform="rotate(-25 22.4 22)" />
          <ellipse cx="41.6" cy="22" rx="6" ry="4" fill="#FFFDF7" opacity="0.85" transform="rotate(25 41.6 22)" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-lg font-extrabold tracking-tight sm:text-xl ${nameColor}`}>{brand.name}</span>
        {withTagline ? <span className={`text-[0.68rem] font-semibold sm:text-xs ${taglineColor}`}>{brand.tagline}</span> : null}
      </span>
    </a>
  )
}
