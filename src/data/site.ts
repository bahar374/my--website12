export type NavLink = {
  label: string
  to: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export const CONTACT = {
  phone: '(555) 246-7890',
  phoneHref: 'tel:+15552467890',
  email: 'hello@horizonproperties.com',
  address: '2400 Lakeshore Boulevard, Austin, TX 78703',
  hours: 'Mon – Fri · 9:00 – 18:00',
}

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
]

export const BRAND = {
  name: 'Horizon Properties',
  wordmark: 'HORIZON PROPERTIES',
  tagline: 'Exceptional homes & investments',
  description:
    'Horizon Properties curates exceptional homes and investment opportunities in the world’s most desirable locations — guided by integrity, transparency and an obsession with detail.',
}
