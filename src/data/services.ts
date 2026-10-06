export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Luxury Home Sales',
    description:
      'Expert representation for buying and selling premium residential properties, from architecturally significant homes to private estates.',
    icon: 'home',
  },
  {
    id: '2',
    title: 'Property Investment',
    description:
      'Strategic investment guidance backed by market analysis, helping you identify and acquire properties with strong appreciation potential.',
    icon: 'trending',
  },
  {
    id: '3',
    title: 'Property Marketing',
    description:
      'Award-winning marketing campaigns featuring professional photography, cinematic video, and targeted digital exposure for your listing.',
    icon: 'megaphone',
  },
  {
    id: '4',
    title: 'Real Estate Advisory',
    description:
      'Personalized advisory services for complex transactions, portfolio optimization, and strategic real estate decision-making.',
    icon: 'compass',
  },
  {
    id: '5',
    title: 'Property Valuation',
    description:
      'Comprehensive property appraisals using comparative market analysis and deep local expertise to determine accurate market value.',
    icon: 'calculator',
  },
  {
    id: '6',
    title: 'Relocation Services',
    description:
      'End-to-end relocation support including neighborhood discovery, school research, and seamless move coordination for a stress-free transition.',
    icon: 'map',
  },
]

export interface WhyChooseItem {
  id: string
  title: string
  description: string
  stat: string
  statLabel: string
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: '1',
    title: 'Trusted Expertise',
    description: 'Our team brings decades of combined experience in luxury real estate, ensuring every transaction is handled with precision.',
    stat: '20+',
    statLabel: 'Years of Experience',
  },
  {
    id: '2',
    title: 'Exclusive Listings',
    description: 'Access to off-market and exclusive properties not available through traditional channels, giving you a distinct advantage.',
    stat: '500+',
    statLabel: 'Properties Sold',
  },
  {
    id: '3',
    title: 'Client-First Approach',
    description: 'We prioritize your goals above all else, providing transparent communication and honest guidance at every step.',
    stat: '98%',
    statLabel: 'Client Satisfaction',
  },
  {
    id: '4',
    title: 'Global Network',
    description: 'Our extensive network connects buyers and sellers across international markets, expanding opportunities for every client.',
    stat: '30+',
    statLabel: 'Countries Served',
  },
]
