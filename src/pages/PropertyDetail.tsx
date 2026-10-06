import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ImageGallery from '../components/ImageGallery'
import PropertyCard from '../components/PropertyCard'
import { getPropertyBySlug, getSimilarProperties } from '../data/properties'

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const property = slug ? getPropertyBySlug(slug) : undefined
  const [isFavorite, setIsFavorite] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)

  if (!property) return <Navigate to="/properties" replace />

  const similar = getSimilarProperties(property)

  const stats = [
    { label: 'Bedrooms', value: property.bedrooms, icon: <path d="M2 4v3M2 20v-3M22 4v3M22 20v-3M2 9h20M2 15h20M6 4v16M18 4v16" /> },
    { label: 'Bathrooms', value: property.bathrooms, icon: <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6z M7 18.5c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1" /> },
    { label: 'Square Feet', value: property.sqft.toLocaleString(), icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></> },
    { label: 'Garage', value: `${property.garage} Car`, icon: <><path d="M5 12h14a2 2 0 0 1 2 2v6H3v-6a2 2 0 0 1 2-2z" /><path d="M7 12V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" /></> },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-white border-b border-navy-50">
        <div className="container-luxe py-4">
          <nav className="flex items-center gap-2 text-sm text-navy-dark/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy-dark transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-navy-dark transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-navy-dark font-medium truncate">{property.name}</span>
          </nav>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-luxe">
          <ScrollReveal>
            <ImageGallery images={property.images} alt={property.name} />
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-section bg-white">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Details */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                {/* Title section */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-sm font-medium uppercase tracking-wider text-champagne">{property.type}</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mt-2">{property.name}</h1>
                    <p className="flex items-center gap-2 text-navy-dark/60 mt-3">
                      <svg className="h-5 w-5 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {property.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-navy-50 text-navy-dark hover:border-champagne transition-all duration-300"
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    aria-pressed={isFavorite}
                  >
                    <svg className={`h-6 w-6 transition-colors duration-300 ${isFavorite ? 'fill-champagne text-champagne' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-navy-50">
                  <span className="text-3xl font-bold text-navy-dark">{property.price}</span>
                  <span className="rounded-full bg-warm-gray px-3 py-1 text-xs font-semibold text-navy-dark/60">{property.status}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="p-5 rounded-card bg-warm-gray text-center">
                      <svg className="h-6 w-6 mx-auto text-champagne mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {stat.icon}
                      </svg>
                      <div className="text-xl font-bold text-navy-dark">{stat.value}</div>
                      <div className="text-xs text-navy-dark/50 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-navy-dark mb-4">Description</h2>
                  <p className="text-navy-dark/70 leading-relaxed text-lg">{property.description}</p>
                </div>

                {/* Property details */}
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-navy-dark mb-4">Property Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: 'Type', value: property.type },
                      { label: 'Lot Size', value: property.lotSize },
                      { label: 'Year Built', value: property.yearBuilt },
                      { label: 'Garage', value: `${property.garage} spaces` },
                      { label: 'Status', value: property.status },
                      { label: 'Location', value: property.city },
                    ].map((detail) => (
                      <div key={detail.label} className="flex flex-col py-3 border-b border-navy-50">
                        <span className="text-xs uppercase tracking-wider text-navy-dark/40">{detail.label}</span>
                        <span className="text-sm font-semibold text-navy-dark mt-1">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key features */}
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-navy-dark mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 py-2">
                        <svg className="h-5 w-5 text-champagne shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-navy-dark/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-xl font-bold text-navy-dark mb-4">Amenities</h2>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, i) => (
                      <span key={i} className="rounded-full bg-warm-gray px-4 py-2 text-sm text-navy-dark/70">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Agent + CTA */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={200}>
                <div className="sticky top-24 bg-warm-gray rounded-lg-card p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                      <img src={property.agent.photo} alt={property.agent.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-dark">{property.agent.name}</h3>
                    <p className="text-sm text-champagne">{property.agent.title}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a href={`tel:${property.agent.phone}`} className="flex items-center gap-3 text-sm text-navy-dark/70 hover:text-navy-dark transition-colors">
                      <svg className="h-4 w-4 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {property.agent.phone}
                    </a>
                    <a href={`mailto:${property.agent.email}`} className="flex items-center gap-3 text-sm text-navy-dark/70 hover:text-navy-dark transition-colors break-all">
                      <svg className="h-4 w-4 text-champagne shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      {property.agent.email}
                    </a>
                  </div>

                  <button
                    onClick={() => setShowSchedule(true)}
                    className="w-full btn-primary mb-3"
                  >
                    Schedule a Viewing
                  </button>
                  <a href={`tel:${property.agent.phone}`} className="w-full btn-outline-dark block text-center">
                    Contact Agent
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Similar properties */}
      {similar.length > 0 && (
        <section className="py-section bg-warm-gray">
          <div className="container-luxe">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="section-label">You May Also Like</span>
                <h2 className="text-section text-navy-dark mt-4">Similar Properties</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {similar.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 100}>
                  <PropertyCard property={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile floating CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-navy-50 p-4 flex gap-3">
        <a href={`tel:${property.agent.phone}`} className="flex-1 btn-outline-dark justify-center">
          Call
        </a>
        <button onClick={() => setShowSchedule(true)} className="flex-1 btn-primary justify-center">
          Schedule
        </button>
      </div>

      {/* Schedule modal */}
      {showSchedule && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowSchedule(false)}>
          <div className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm" />
          <div className="relative bg-white rounded-lg-card p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowSchedule(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full text-navy-dark/40 hover:bg-warm-gray transition-colors"
              aria-label="Close"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold text-navy-dark mb-2">Schedule a Viewing</h3>
            <p className="text-sm text-navy-dark/60 mb-6">Fill out the form below and our agent will contact you to arrange a visit to {property.name}.</p>
            <form onSubmit={(e) => { e.preventDefault(); setShowSchedule(false); }} className="space-y-4">
              <input type="text" required placeholder="Full Name" className="w-full rounded-lg border border-navy-50 bg-warm-gray px-4 py-3 text-sm focus:outline-none focus:border-champagne transition-colors" />
              <input type="email" required placeholder="Email Address" className="w-full rounded-lg border border-navy-50 bg-warm-gray px-4 py-3 text-sm focus:outline-none focus:border-champagne transition-colors" />
              <input type="date" required className="w-full rounded-lg border border-navy-50 bg-warm-gray px-4 py-3 text-sm focus:outline-none focus:border-champagne transition-colors" />
              <button type="submit" className="w-full btn-primary">Request Viewing</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
