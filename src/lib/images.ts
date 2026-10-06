/**
 * Imagery is bundled in `public/images` and served from our own origin.
 * Third-party image CDNs are blocked on some networks, so nothing here may
 * point at an external host.
 */
const FILES: Record<string, string> = {
  '1512917774080-9991f1c4c750': '/images/hero-villa.jpg',
  '1600596542815-ffad4c1539a9': '/images/house-pool.jpg',
  '1600607687939-ce8a6c25118c': '/images/interior-glass.jpg',
  '1600607687920-4e2a09cf159d': '/images/interior-living.jpg',
  '1600573472550-8090b5e0745e': '/images/interior-kitchen.jpg',
  '1600585154340-be6161a56a0c': '/images/house-white.jpg',
  '1600585154526-990dced4db0d': '/images/house-modern.jpg',
  '1600210492486-724fe5c67fb0': '/images/interior-lounge.jpg',
  '1615874959474-d609969a20ed': '/images/interior-bedroom.jpg',
  '1570129477492-45c003edd2be': '/images/house-suburban.jpg',
  '1568605114967-8130f3a36994': '/images/house-day.jpg',
  '1580587771525-78b9dba3b914': '/images/house-lakeside.jpg',
  '1600047509807-ba8f99d2cdde': '/images/interior-dining.jpg',
  '1523217582562-09d0def993a6': '/images/estate-night.jpg',
  '1564013799919-ab600027ffc6': '/images/house-garden.jpg',
  '1613490493576-7fde63acd811': '/images/estate-luxury.jpg',
  '1613977257363-707ba9348227': '/images/house-contemporary.jpg',
  '1600566753086-00f18fb6b3ea': '/images/house-terrace.jpg',
  '1560250097-0b93528c311a': '/images/team-daniel.jpg',
  '1573497019940-1c28c88b4f3e': '/images/team-olivia.jpg',
  '1507003211169-0a1dd7228f2d': '/images/team-james.jpg',
  '1494790108377-be9c29b29330': '/images/team-sophia.jpg',
}

const FALLBACK = '/images/hero-villa.jpg'

/**
 * Resolves an asset key to a local file. The optional width is retained so
 * call sites can keep expressing intent if imagery later moves behind a CDN.
 */
export const photo = (id: string, _width?: number): string => FILES[id] ?? FALLBACK

export const IMG = {
  hero: photo('1512917774080-9991f1c4c750'),
  aboutPrimary: photo('1600596542815-ffad4c1539a9'),
  aboutSecondary: photo('1600607687939-ce8a6c25118c'),
  whyChoose: photo('1613490493576-7fde63acd811'),
  ctaBackdrop: photo('1600585154340-be6161a56a0c'),
  contact: photo('1600585154340-be6161a56a0c'),
}
