import { Link } from 'react-router-dom'
import type { Property } from '@/data/properties'
import { formatNumber, formatPrice, propertyHref } from '@/lib/format'
import { AreaIcon, BathIcon, BedIcon, MapPinIcon } from './Icons'
import FavoriteButton from './FavoriteButton'

type PropertyCardProps = {
  property: Property
  className?: string
  showDetails?: boolean
  rounded?: string
}

export default function PropertyCard({
  property,
  className = '',
  showDetails = false,
  rounded = 'rounded-2.5xl',
}: PropertyCardProps) {
  return (
    <article
      className={`group relative overflow-hidden ${rounded} bg-navy-950 shadow-card transition-all duration-500 ease-premium hover:shadow-lift ${className}`.trim()}
    >
      <Link
        to={propertyHref(property.slug)}
        className="block rounded-2.5xl focus-visible:ring-0"
        aria-label={`${property.title} — ${property.city}, ${property.region}. ${formatPrice(property.price)}`}
      >
        <div className="relative aspect-[16/11] w-full overflow-hidden">
          <img
            src={property.images[0]}
            alt={`${property.title} in ${property.city}, ${property.region}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/92 via-navy-950/35 to-navy-950/5" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-label text-navy backdrop-blur">
            {property.type}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
            {property.title}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[0.78rem] text-white/75">
            <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-champagne" />
            {property.city}, {property.region}, {property.country}
          </p>
          <p className="mt-3 font-display text-lg font-semibold tracking-tight text-champagne">
            {formatPrice(property.price)}
          </p>

          {showDetails && (
            <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-3.5 text-[0.74rem] text-white/75">
              <li className="inline-flex items-center gap-1.5">
                <BedIcon className="h-3.5 w-3.5 text-white/50" />
                {property.beds} Beds
              </li>
              <li className="inline-flex items-center gap-1.5">
                <BathIcon className="h-3.5 w-3.5 text-white/50" />
                {property.baths} Baths
              </li>
              <li className="inline-flex items-center gap-1.5">
                <AreaIcon className="h-3.5 w-3.5 text-white/50" />
                {formatNumber(property.sqft)} sqft
              </li>
            </ul>
          )}
        </div>
      </Link>

      <FavoriteButton propertyId={property.id} className="absolute right-4 top-4" />
    </article>
  )
}
