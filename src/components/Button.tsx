import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'champagne' | 'outline' | 'outlineLight' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
  size?: Size
  className?: string
  onClick?: () => void
  disabled?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  ariaLabel?: string
}

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-navy text-white shadow-soft hover:bg-navy-800 hover:shadow-lift',
  champagne: 'bg-champagne text-navy hover:bg-champagne-light',
  outline: 'border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white',
  outlineLight: 'border border-white/45 text-white hover:bg-white hover:text-navy',
  ghost: 'text-navy hover:text-champagne',
  white: 'bg-white text-navy shadow-soft hover:bg-ivory',
}

const SIZES: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[0.78rem]',
  md: 'px-6 py-3 text-[0.82rem]',
  lg: 'px-8 py-4 text-[0.88rem]',
}

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  ariaLabel,
}: ButtonProps) {
  const classes = [
    'group inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-wide transition-all duration-300 ease-premium',
    'disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 ease-premium group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
