export interface Agent {
  name: string
  title: string
  phone: string
  email: string
  photo: string
}

export interface Property {
  id: string
  slug: string
  name: string
  location: string
  city: string
  state: string
  country: string
  price: string
  priceValue: number
  type: string
  status: string
  bedrooms: number
  bathrooms: number
  sqft: number
  lotSize: string
  yearBuilt: number
  garage: number
  description: string
  features: string[]
  amenities: string[]
  images: string[]
  agent: Agent
  featured: boolean
}

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`

const agents: Record<string, Agent> = {
  daniel: {
    name: 'Daniel Morgan',
    title: 'Managing Director',
    phone: '(555) 246-7891',
    email: 'daniel@horizonproperties.com',
    photo: img('photo-1507003211169-0a1dd7228f2d', 400),
  },
  olivia: {
    name: 'Olivia Carter',
    title: 'Luxury Property Advisor',
    phone: '(555) 246-7892',
    email: 'olivia@horizonproperties.com',
    photo: img('photo-1544005313-94ddf0286df2', 400),
  },
  james: {
    name: 'James Wilson',
    title: 'Investment Consultant',
    phone: '(555) 246-7893',
    email: 'james@horizonproperties.com',
    photo: img('photo-1488161628813-04466f872be2', 400),
  },
  sophia: {
    name: 'Sophia Bennett',
    title: 'Senior Property Specialist',
    phone: '(555) 246-7894',
    email: 'sophia@horizonproperties.com',
    photo: img('photo-1573496359142-b8d87734a5a2', 400),
  },
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    price: '$2.35 Million',
    priceValue: 2350000,
    type: 'Villa',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 6200,
    lotSize: '0.8 acres',
    yearBuilt: 2021,
    garage: 2,
    description:
      'A stunning modern villa set on the shores of Lake Austin, featuring floor-to-ceiling glass walls that blur the line between interior and landscape. The open-plan living space flows seamlessly to an infinity pool and private dock, creating an unparalleled indoor-outdoor living experience.',
    features: [
      'Floor-to-ceiling glass walls',
      'Infinity pool with lake views',
      'Private dock and boathouse',
      'Smart home automation',
      'Chef\'s kitchen with Wolf appliances',
      'Primary suite with lake view',
    ],
    amenities: [
      'Infinity Pool',
      'Private Dock',
      'Home Theater',
      'Wine Cellar',
      '3-Car Garage',
      'Landscaped Gardens',
      'Smart Home System',
      'Outdoor Kitchen',
    ],
    images: [
      img('photo-1613977257363-707ba9348227'),
      img('photo-1613977257365-aaae5a9817ff'),
      img('photo-1632829882891-5047ccc421bc'),
      img('photo-1724582586529-62622e50c0b3'),
    ],
    agent: agents.daniel,
    featured: true,
  },
  {
    id: '2',
    slug: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    city: 'Malibu',
    state: 'California',
    country: 'USA',
    price: '$4.8 Million',
    priceValue: 4800000,
    type: 'Modern Home',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5400,
    lotSize: '1.2 acres',
    yearBuilt: 2020,
    garage: 3,
    description:
      'Perched on the Malibu cliffs, this architectural masterpiece offers panoramic Pacific Ocean views through its seamless glass facade. The home features an open-concept design with natural stone, white oak, and steel creating a sophisticated coastal retreat.',
    features: [
      'Panoramic ocean views',
      'Seamless glass facade',
      'Cliffside infinity pool',
      'Private beach access',
      'Solar power system',
      'Outdoor entertaining terrace',
    ],
    amenities: [
      'Infinity Pool',
      'Ocean View Terrace',
      'Private Beach Access',
      'Solar Panels',
      'Wine Room',
      'Spa & Sauna',
      '2-Car Garage',
      'Smart Climate Control',
    ],
    images: [
      img('photo-1706808849780-7a04fbac83ef'),
      img('photo-1512917774080-9991f1c4c750'),
      img('photo-1600121848594-d8644e57abab'),
      img('photo-1705321963943-de94bb3f0dd3'),
    ],
    agent: agents.olivia,
    featured: true,
  },
  {
    id: '3',
    slug: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    city: 'Scottsdale',
    state: 'Arizona',
    country: 'USA',
    price: '$3.15 Million',
    priceValue: 3150000,
    type: 'Estate',
    status: 'For Sale',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 7800,
    lotSize: '2.5 acres',
    yearBuilt: 2019,
    garage: 4,
    description:
      'A magnificent desert estate that harmonizes modern architecture with the natural Sonoran landscape. Featuring rammed earth walls, a resort-style pool, and expansive great room with mountain views, this property embodies luxury desert living.',
    features: [
      'Rammed earth walls',
      'Resort-style pool',
      'Mountain view great room',
      'Casita guest house',
      'Desert landscaping',
      'Outdoor fireplace lounge',
    ],
    amenities: [
      'Resort Pool',
      'Guest Casita',
      'Outdoor Fireplace',
      'Putting Green',
      'Wine Cellar',
      'Exercise Room',
      '4-Car Garage',
      'Desert Gardens',
    ],
    images: [
      img('photo-1591474200742-8e512e6f98f8'),
      img('photo-1756435292384-1bf32eff7baf'),
      img('photo-1567767292278-a4f21aa2d36e'),
      img('photo-1729086046027-09979ade13fd'),
    ],
    agent: agents.james,
    featured: true,
  },
  {
    id: '4',
    slug: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    city: 'Miami',
    state: 'Florida',
    country: 'USA',
    price: '$5.2 Million',
    priceValue: 5200000,
    type: 'Waterfront',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 8100,
    lotSize: '0.5 acres',
    yearBuilt: 2022,
    garage: 3,
    description:
      'An extraordinary oceanfront residence in exclusive Miami Beach, offering 200 feet of private waterfront. The home features a dramatic two-story living space, rooftop terrace, and a deep-water dock capable of accommodating a large yacht.',
    features: [
      '200 ft of private waterfront',
      'Deep-water yacht dock',
      'Rooftop terrace with ocean view',
      'Two-story living space',
      'Summer kitchen',
      'Hurricane-rated impact glass',
    ],
    amenities: [
      'Private Beach',
      'Yacht Dock',
      'Rooftop Terrace',
      'Elevator',
      'Wine Cellar',
      'Gym & Spa',
      '3-Car Garage',
      'Smart Security',
    ],
    images: [
      img('photo-1748063578185-3d68121b11ff'),
      img('photo-1580587771525-78b9dba3b914'),
      img('photo-1583847268964-b28dc8f51f92'),
      img('photo-1724582586458-a51791349977'),
    ],
    agent: agents.sophia,
    featured: true,
  },
  {
    id: '5',
    slug: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    price: '$3.75 Million',
    priceValue: 3750000,
    type: 'Modern Home',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4800,
    lotSize: '0.6 acres',
    yearBuilt: 2021,
    garage: 2,
    description:
      'Nestled in the Hollywood Hills, this architectural retreat offers sweeping views of the Los Angeles basin. The home features cantilevered design, a zero-edge pool, and walls of glass that open to create a seamless indoor-outdoor living environment.',
    features: [
      'Cantilevered architecture',
      'Zero-edge pool',
      'City and ocean views',
      'Walls of glass',
      'Floating staircase',
      'Outdoor dining pavilion',
    ],
    amenities: [
      'Infinity Pool',
      'City Views',
      'Home Theater',
      'Bar & Lounge',
      '2-Car Garage',
      'Smart Home',
      'Fire Pit',
      'Garden Terrace',
    ],
    images: [
      img('photo-1613977257365-aaae5a9817ff'),
      img('photo-1512917774080-9991f1c4c750'),
      img('photo-1632829882891-5047ccc421bc'),
      img('photo-1600121848594-d8644e57abab'),
    ],
    agent: agents.olivia,
    featured: true,
  },
  {
    id: '6',
    slug: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    city: 'Beverly Hills',
    state: 'California',
    country: 'USA',
    price: '$6.4 Million',
    priceValue: 6400000,
    type: 'Estate',
    status: 'For Sale',
    bedrooms: 7,
    bathrooms: 8,
    sqft: 12000,
    lotSize: '1.8 acres',
    yearBuilt: 2020,
    garage: 5,
    description:
      'A grand estate in the heart of Beverly Hills, surrounded by lush palm gardens and manicured lawns. This residence combines classical proportions with contemporary finishes, featuring a grand foyer, formal gardens, and a championship tennis court.',
    features: [
      'Grand foyer with dual staircase',
      'Championship tennis court',
      'Formal gardens with palms',
      'Guest house',
      'Wine tasting room',
      'Motor court with fountain',
    ],
    amenities: [
      'Tennis Court',
      'Guest House',
      'Formal Gardens',
      'Wine Tasting Room',
      'Pool & Spa',
      'Home Gym',
      '5-Car Garage',
      'Staff Quarters',
    ],
    images: [
      img('photo-1580587771525-78b9dba3b914'),
      img('photo-1613977257363-707ba9348227'),
      img('photo-1705321963943-de94bb3f0dd3'),
      img('photo-1724582586529-62622e50c0b3'),
    ],
    agent: agents.daniel,
    featured: true,
  },
  {
    id: '7',
    slug: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    city: 'Lake Tahoe',
    state: 'Nevada',
    country: 'USA',
    price: '$2.95 Million',
    priceValue: 2950000,
    type: 'Lakefront',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4200,
    lotSize: '0.4 acres',
    yearBuilt: 2018,
    garage: 2,
    description:
      'A contemporary lake house on the pristine shores of Lake Tahoe, designed to maximize mountain and water views. The home features natural stone and timber construction, a lakeside hot tub, and a great room with a dramatic stone fireplace.',
    features: [
      'Private lakefront',
      'Mountain and lake views',
      'Stone fireplace great room',
      'Lakeside hot tub',
      'Timber and stone construction',
      'Boat slip included',
    ],
    amenities: [
      'Private Beach',
      'Boat Slip',
      'Hot Tub',
      'Stone Fireplace',
      '2-Car Garage',
      'Ski Storage',
      'Deck & Patio',
      'Heated Driveway',
    ],
    images: [
      img('photo-1512917774080-9991f1c4c750'),
      img('photo-1706808849780-7a04fbac83ef'),
      img('photo-1729086046027-09979ade13fd'),
      img('photo-1567767292278-a4f21aa2d36e'),
    ],
    agent: agents.james,
    featured: true,
  },
  {
    id: '8',
    slug: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    price: '$1.85 Million',
    priceValue: 1850000,
    type: 'Penthouse',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3200,
    lotSize: 'N/A',
    yearBuilt: 2023,
    garage: 2,
    description:
      'A full-floor penthouse in downtown Austin with 360-degree city views through floor-to-ceiling windows. The residence features an open gourmet kitchen, private elevator access, and a sprawling wraparound terrace with a plunge pool.',
    features: [
      '360-degree city views',
      'Private elevator access',
      'Wraparound terrace',
      'Plunge pool on terrace',
      'Gourmet chef\'s kitchen',
      'Double-height living area',
    ],
    amenities: [
      'Plunge Pool',
      'Wraparound Terrace',
      'Concierge Service',
      'Fitness Center',
      'Valet Parking',
      'Wine Cooler',
      'Smart Home',
      'Floor-to-Ceiling Windows',
    ],
    images: [
      img('photo-1561026554-29d9815d4f3d'),
      img('photo-1582268611958-ebfd161ef9cf'),
      img('photo-1632829882891-5047ccc421bc'),
      img('photo-1724582586458-a51791349977'),
    ],
    agent: agents.sophia,
    featured: true,
  },
]

export const propertyTypes = ['All', 'Villa', 'Modern Home', 'Estate', 'Waterfront', 'Lakefront', 'Penthouse']
export const locations = ['All', 'Austin', 'Malibu', 'Scottsdale', 'Miami', 'Los Angeles', 'Beverly Hills', 'Lake Tahoe']
export const sortByOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

export function getSimilarProperties(property: Property, count = 3): Property[] {
  return properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.city === property.city))
    .slice(0, count)
}
