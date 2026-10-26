import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Shared stroke/geometry defaults for the line-icon set. */
function line(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
    ...props,
  }
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V4.8A2 2 0 0 1 4.8 2.8H12a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8Z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  )
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M2.8 6.6A1.6 1.6 0 0 1 4.4 5h8.4a1.2 1.2 0 0 1 1.2 1.2V16H2.8Z" />
      <path d="M14 8.6h3.4l3.3 3.3v4.1H14Z" />
      <circle cx="7" cy="17.6" r="1.9" />
      <circle cx="17.4" cy="17.6" r="1.9" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M12 2.8 4.8 5.6v6c0 4.2 3 7.6 7.2 9.2 4.2-1.6 7.2-5 7.2-9.2v-6Z" />
      <path d="m8.9 11.8 2.2 2.2 4-4.2" />
    </svg>
  )
}

export function QualitySealIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="m12 2.6 2.3 1.7 2.8-.3 1 2.7 2.4 1.5-.9 2.7.9 2.7-2.4 1.5-1 2.7-2.8-.3L12 21.4l-2.3-1.7-2.8.3-1-2.7L3.5 15.8l.9-2.7-.9-2.7 2.4-1.5 1-2.7 2.8.3Z" />
      <path d="m9.3 12 1.9 1.9 3.6-3.8" />
    </svg>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M4.6 19.4c0-8.2 4.5-13.1 14.8-14.4.9 9.6-3.6 15-11.2 15a7 7 0 0 1-3.6-.6Z" />
      <path d="M5.2 18.8c3-3.6 6.6-6.2 10.5-8" />
    </svg>
  )
}

export function HoneycombIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M8.2 3.6 12 5.8v4.4l-3.8 2.2-3.8-2.2V5.8Z" />
      <path d="M15.8 8.6 19.6 10.8v4.4L15.8 17.4 12 15.2v-4.4Z" />
      <path d="M8.2 15 12 17.2v4.4l-3.8 2.2" />
    </svg>
  )
}

export function StarIcon({ filled = false, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg {...line(props)} fill={filled ? 'currentColor' : 'none'}>
      <path d="m12 3.4 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6L3.3 9.8l6-.9Z" />
    </svg>
  )
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M3 4h2l2.3 10.2a1.7 1.7 0 0 0 1.7 1.3h7.9a1.7 1.7 0 0 0 1.6-1.2L20.2 7H6" />
      <circle cx="9.4" cy="19.2" r="1.4" />
      <circle cx="16.8" cy="19.2" r="1.4" />
    </svg>
  )
}

export function HeartIcon({ filled = false, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg {...line(props)} fill={filled ? 'currentColor' : 'none'}>
      <path d="M12 19.6s-7.2-4.3-7.2-9.4A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.2 2.6c0 5.1-7.2 9.4-7.2 9.4Z" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <circle cx="10.8" cy="10.8" r="6" />
      <path d="m15.4 15.4 4 4" />
    </svg>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <circle cx="12" cy="8.6" r="3.6" />
      <path d="M4.8 20c.7-3.4 3.6-5.2 7.2-5.2s6.5 1.8 7.2 5.2" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="m5 12.6 4.4 4.4L19 7.4" />
    </svg>
  )
}

export function CheckBadgeIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="m8.4 12.2 2.4 2.4 4.8-5" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M6.2 3.6h3l1.4 3.6-1.9 1.3a10.6 10.6 0 0 0 5.8 5.8l1.3-1.9 3.6 1.4v3a1.8 1.8 0 0 1-2 1.8A15.4 15.4 0 0 1 4.4 5.6a1.8 1.8 0 0 1 1.8-2Z" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <rect x="3" y="5.4" width="18" height="13.2" rx="2.2" />
      <path d="m4.4 7 7.6 5.6L19.6 7" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M12 21c4-4.2 6-7.3 6-9.8a6 6 0 1 0-12 0c0 2.5 2 5.6 6 9.8Z" />
      <circle cx="12" cy="11" r="2.4" />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M14.5 5.5 8 12l6.5 6.5" />
    </svg>
  )
}

export function HoneyDipperIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M15.6 3.4 8.9 10.1" />
      <path d="M9.4 9.6c1.7-.6 3.4.4 4 2.1.6 1.7-.4 3.4-2.1 4-1.6.6-3.1-.2-2.9-1.4.2-1.1 1.4-1.1 2.3-1.9" />
      <circle cx="18.4" cy="4.6" r="1.6" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="m20.6 4.6-16.9 6.6 4.6 1.7 1.6 5.3 2.9-3.7 4.1 3 3.7-12.9Z" />
      <path d="M8.3 12.9 20.6 4.6l-9.4 9.9" />
    </svg>
  )
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L3.8 20.2l1.3-4.2A8.2 8.2 0 1 1 20.2 11.8Z" />
      <path d="M8.9 8.2c-.6.4-.9 1.2-.6 2 .7 2.2 2.4 3.9 4.6 4.6.8.3 1.6 0 2-.6" />
    </svg>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...line(props)}>
      <rect x="2.8" y="5.6" width="18.4" height="12.8" rx="4" />
      <path d="m10.4 9.6 4.6 2.4-4.6 2.4Z" />
    </svg>
  )
}
