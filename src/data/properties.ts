export interface Property {
  id: string
  title: string
  location: string
  price: string
  priceValue: number
  beds: number
  baths: number
  sqft: number
  type: string
  status: string
  description: string
  features: string[]
  image: string
  gallery: string[]
}

export const properties: Property[] = [
  {
    id: 'lakeside-modern-villa',
    title: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    price: '$2.35 Million',
    priceValue: 2350000,
    beds: 5,
    baths: 4,
    sqft: 4200,
    type: 'Villa',
    status: 'For Sale',
    description: 'A masterwork of contemporary architecture set against the tranquil shores of Lake Austin. Floor-to-ceiling glass walls dissolve the boundary between interior and landscape, while sustainably sourced materials ground the home in its natural surroundings.',
    features: ['Infinity Pool', 'Smart Home System', 'Wine Cellar', 'Private Dock', 'Solar Panels', 'Home Theater'],
    image: '/images/prop-lakeside.jpg',
    gallery: [
      '/images/prop-lakeside.jpg',
      '/images/prop-lakeside-2.jpg',
      '/images/prop-lakeside-3.jpg',
    ],
  },
  {
    id: 'skyline-penthouse',
    title: 'Skyline Penthouse',
    location: 'New York, New York, USA',
    price: '$4.8 Million',
    priceValue: 4800000,
    beds: 3,
    baths: 3,
    sqft: 3100,
    type: 'Penthouse',
    status: 'For Sale',
    description: 'Perched above the city, this penthouse offers panoramic views of the Manhattan skyline. Wrapped in floor-to-ceiling glass, the residence is a study in modern minimalism with curated finishes throughout.',
    features: ['Private Elevator', 'Terrace Garden', 'Concierge Service', 'Gym Access', 'Wine Storage', 'Heated Floors'],
    image: '/images/prop-skyline.jpg',
    gallery: [
      '/images/prop-skyline.jpg',
      '/images/prop-skyline-2.jpg',
      '/images/prop-skyline-3.jpg',
    ],
  },
  {
    id: 'coastal-retreat',
    title: 'Coastal Retreat',
    location: 'Malibu, California, USA',
    price: '$3.2 Million',
    priceValue: 3200000,
    beds: 4,
    baths: 3,
    sqft: 3800,
    type: 'Estate',
    status: 'For Sale',
    description: 'Where the Pacific meets architectural poetry. This oceanfront estate captures the essence of California living with seamless indoor-outdoor flow, natural light, and breathtaking sunset views.',
    features: ['Oceanfront', 'Infinity Pool', 'Outdoor Kitchen', 'Beach Access', 'Floor-to-Ceiling Glass', 'Private Garage'],
    image: '/images/prop-coastal.jpg',
    gallery: [
      '/images/prop-coastal.jpg',
      '/images/prop-coastal-2.jpg',
      '/images/prop-coastal-2.jpg',
    ],
  },
  {
    id: 'mountain-view-estate',
    title: 'Mountain View Estate',
    location: 'Aspen, Colorado, USA',
    price: '$5.5 Million',
    priceValue: 5500000,
    beds: 6,
    baths: 5,
    sqft: 5600,
    type: 'Estate',
    status: 'For Sale',
    description: 'A sanctuary carved into the Colorado Rockies. Stone, timber, and glass converge in a residence that honors its alpine setting while delivering uncompromising luxury and warmth.',
    features: ['Ski-in/Ski-out', 'Stone Fireplace', 'Heated Driveway', 'Spa Room', 'Wine Cellar', 'Guest House'],
    image: '/images/prop-mountain.jpg',
    gallery: [
      '/images/prop-mountain.jpg',
      '/images/prop-mountain-2.jpg',
      '/images/prop-mountain-2.jpg',
    ],
  },
  {
    id: 'garden-district-manor',
    title: 'Garden District Manor',
    location: 'New Orleans, Louisiana, USA',
    price: '$1.9 Million',
    priceValue: 1900000,
    beds: 4,
    baths: 3,
    sqft: 3400,
    type: 'Manor',
    status: 'For Sale',
    description: 'A historic manor reimagined for modern living. Original hardwood floors, soaring ceilings, and restored architectural details meet contemporary comfort in the heart of the Garden District.',
    features: ['Historic Architecture', 'Courtyard Garden', 'Original Hardwood', 'Butler\'s Pantry', 'Carriage House', 'Wraparound Porch'],
    image: '/images/prop-manor.jpg',
    gallery: [
      '/images/prop-manor.jpg',
      '/images/prop-manor.jpg',
      '/images/prop-manor.jpg',
    ],
  },
  {
    id: 'urban-loft-residence',
    title: 'Urban Loft Residence',
    location: 'Chicago, Illinois, USA',
    price: '$1.2 Million',
    priceValue: 1200000,
    beds: 2,
    baths: 2,
    sqft: 2200,
    type: 'Loft',
    status: 'For Sale',
    description: 'An industrial-chic loft in a converted warehouse. Exposed brick, timber beams, and oversized windows define this residence that celebrates its architectural heritage.',
    features: ['Exposed Brick', 'Timber Beams', 'Open Floor Plan', 'Rooftop Access', 'Bike Storage', 'Smart Lighting'],
    image: '/images/prop-loft.jpg',
    gallery: [
      '/images/prop-loft.jpg',
      '/images/prop-loft-2.jpg',
      '/images/prop-loft-2.jpg',
    ],
  },
]
