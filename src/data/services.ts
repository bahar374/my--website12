export type Service = {
  id: string
  index: string
  title: string
  description: string
  points: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'luxury-home-sales',
    index: '01',
    title: 'Luxury Home Sales',
    description:
      'Discreet representation for exceptional homes — from private previews to closing, managed end to end.',
    points: ['Off-market access', 'Bespoke marketing', 'Negotiation strategy'],
  },
  {
    id: 'property-investment',
    index: '02',
    title: 'Property Investment',
    description:
      'Data-led acquisition and portfolio strategy across prime residential and mixed-use assets.',
    points: ['Yield analysis', 'Portfolio structuring', 'Exit planning'],
  },
  {
    id: 'property-marketing',
    index: '03',
    title: 'Property Marketing',
    description:
      'Cinematic photography, film and editorial storytelling that places your property in front of the right buyers.',
    points: ['Architectural film', 'Global syndication', 'Private launch events'],
  },
  {
    id: 'real-estate-advisory',
    index: '04',
    title: 'Real Estate Advisory',
    description:
      'Independent counsel on acquisitions, structuring and long-term land and asset strategy.',
    points: ['Due diligence', 'Market intelligence', 'Structuring advice'],
  },
  {
    id: 'property-valuation',
    index: '05',
    title: 'Property Valuation',
    description:
      'Precise, evidence-based valuations for lending, estate planning and portfolio review.',
    points: ['Comparative analysis', 'Insurance schedules', 'Portfolio reporting'],
  },
  {
    id: 'relocation-services',
    index: '06',
    title: 'Relocation Services',
    description:
      'A concierge relocation experience covering schools, interiors and every detail of the move.',
    points: ['Area orientation', 'Interior styling', 'Settling-in support'],
  },
]
