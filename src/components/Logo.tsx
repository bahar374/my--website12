import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  light?: boolean
}

export default function Logo({ className = '', light = true }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`} aria-label="Horizon Properties Home">
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path
          d="M6 22V12L16 5L26 12V22"
          stroke="#C4A06A"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-500 ease-premium group-hover:scale-110"
          style={{ transformOrigin: 'center' }}
        />
        <path
          d="M12 22V15H20V22"
          stroke="#C4A06A"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="6" y1="25" x2="26" y2="25" stroke="#C4A06A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span
        className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
          light ? 'text-white' : 'text-navy-dark'
        }`}
      >
        HORIZON
        <span className="text-champagne font-medium ml-1">PROPERTIES</span>
      </span>
    </Link>
  )
}
