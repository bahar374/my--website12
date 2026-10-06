import { Link } from 'react-router-dom'
import type { Property } from '../data/properties'

interface PropertyCardProps {
  property: Property
  className?: string
  onToggleFavorite?: (id: string) => void
  isFavorite?: boolean
}

export default function PropertyCard({ property, className = '', onToggleFavorite, isFavorite }: PropertyCardProps) {
  return (
    <article className={`property-card group ${className}`}>
      <Link to={`/properties/${property.slug}`} className="block">
        <div className="property-card-image aspect-[4/3]">
          <img
            src={property.images[0]}
            alt={property.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-navy-dark">
              {property.status}
            </span>
          </div>
          {/* Favorite button */}
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.preventDefault()
                onToggleFavorite(property.id)
              }}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-navy-dark hover:bg-white transition-all duration-300"
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              aria-pressed={isFavorite}
            >
              <svg
                className={`h-5 w-5 transition-colors duration-300 ${isFavorite ? 'fill-champagne text-champagne' : 'fill-none'}`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-champagne">{property.type}</span>
          </div>
          <h3 className="text-lg font-bold text-navy-dark leading-tight mb-1 group-hover:text-navy transition-colors duration-300">
            {property.name}
          </h3>
          <p className="flex items-center gap-1.5 text-sm text-navy-dark/50 mb-4">
            <svg className="h-4 w-4 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {property.location}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-navy-50">
            <span className="text-xl font-bold text-navy-dark">{property.price}</span>
            <div className="flex items-center gap-3 text-xs text-navy-dark/50">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4v3M2 20v-3M22 4v3M22 20v-3M2 9h20M2 15h20M6 4v16M18 4v16" />
                </svg>
                {property.bedrooms} BD
              </span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6z" />
                  <path d="M7 18.5c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1" />
                </svg>
                {property.bathrooms} BA
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
