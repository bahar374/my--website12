import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import PropertyCard from '../components/PropertyCard'
import { properties, propertyTypes, locations, sortByOptions } from '../data/properties'

const heroImage = 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=2000&auto=format&fit=crop&q=80'

export default function Properties() {
  const [searchParams] = useSearchParams()
  const initialType = searchParams.get('type') || 'All'

  const [search, setSearch] = useState('')
  const [type, setType] = useState(initialType)
  const [location, setLocation] = useState('All')
  const [minBedrooms, setMinBedrooms] = useState(0)
  const [minBathrooms, setMinBathrooms] = useState(0)
  const [priceRange, setPriceRange] = useState(7000000)
  const [sortBy, setSortBy] = useState('Featured')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.type.toLowerCase().includes(search.toLowerCase())
      const matchesType = type === 'All' || p.type === type
      const matchesLocation = location === 'All' || p.city === location
      const matchesBedrooms = p.bedrooms >= minBedrooms
      const matchesBathrooms = p.bathrooms >= minBathrooms
      const matchesPrice = p.priceValue <= priceRange
      return matchesSearch && matchesType && matchesLocation && matchesBedrooms && matchesBathrooms && matchesPrice
    })

    switch (sortBy) {
      case 'Price: Low to High':
        result = [...result].sort((a, b) => a.priceValue - b.priceValue)
        break
      case 'Price: High to Low':
        result = [...result].sort((a, b) => b.priceValue - a.priceValue)
        break
      case 'Newest':
        result = [...result].sort((a, b) => b.yearBuilt - a.yearBuilt)
        break
    }
    return result
  }, [search, type, location, minBedrooms, minBathrooms, priceRange, sortBy])

  const formatPrice = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    return `$${(value / 1000).toFixed(0)}K`
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={heroImage} alt="Luxury properties" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-navy-dark/50" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <ScrollReveal>
            <span className="section-label">Browse</span>
            <h1 className="text-section text-white mt-4">All Properties</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-navy-50 sticky top-16 md:top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="container-luxe">
          {/* Search bar */}
          <div className="mb-4">
            <div className="relative max-w-2xl mx-auto">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-dark/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, location, or type..."
                className="w-full rounded-full border border-navy-50 bg-warm-gray pl-12 pr-4 py-3 text-sm text-navy-dark focus:outline-none focus:border-champagne transition-colors"
              />
            </div>
          </div>

          {/* Filter controls */}
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-full border border-navy-50 bg-white px-4 py-2.5 text-sm text-navy-dark focus:outline-none focus:border-champagne cursor-pointer"
              aria-label="Property type"
            >
              {propertyTypes.map((t) => (
                <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>
              ))}
            </select>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-full border border-navy-50 bg-white px-4 py-2.5 text-sm text-navy-dark focus:outline-none focus:border-champagne cursor-pointer"
              aria-label="Location"
            >
              {locations.map((l) => (
                <option key={l} value={l}>{l === 'All' ? 'All Locations' : l}</option>
              ))}
            </select>

            <select
              value={minBedrooms}
              onChange={(e) => setMinBedrooms(Number(e.target.value))}
              className="rounded-full border border-navy-50 bg-white px-4 py-2.5 text-sm text-navy-dark focus:outline-none focus:border-champagne cursor-pointer"
              aria-label="Minimum bedrooms"
            >
              <option value={0}>Any Beds</option>
              <option value={3}>3+ Beds</option>
              <option value={4}>4+ Beds</option>
              <option value={5}>5+ Beds</option>
              <option value={6}>6+ Beds</option>
            </select>

            <select
              value={minBathrooms}
              onChange={(e) => setMinBathrooms(Number(e.target.value))}
              className="rounded-full border border-navy-50 bg-white px-4 py-2.5 text-sm text-navy-dark focus:outline-none focus:border-champagne cursor-pointer"
              aria-label="Minimum bathrooms"
            >
              <option value={0}>Any Baths</option>
              <option value={3}>3+ Baths</option>
              <option value={4}>4+ Baths</option>
              <option value={5}>5+ Baths</option>
            </select>

            <div className="flex items-center gap-2 rounded-full border border-navy-50 bg-white px-4 py-2.5">
              <span className="text-sm text-navy-dark/60">Max:</span>
              <input
                type="range"
                min={1000000}
                max={7000000}
                step={250000}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-24 accent-champagne cursor-pointer"
                aria-label="Maximum price"
              />
              <span className="text-sm font-semibold text-navy-dark min-w-[3rem]">{formatPrice(priceRange)}</span>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-navy-50 bg-white px-4 py-2.5 text-sm text-navy-dark focus:outline-none focus:border-champagne cursor-pointer"
              aria-label="Sort by"
            >
              {sortByOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-section bg-warm-gray">
        <div className="container-luxe">
          <div className="flex items-center justify-between mb-8">
            <p className="text-navy-dark/60">
              Showing <span className="font-semibold text-navy-dark">{filtered.length}</span> {filtered.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((property, i) => (
                <ScrollReveal key={property.id} delay={(i % 3) * 100}>
                  <PropertyCard
                    property={property}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={favorites.has(property.id)}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="h-16 w-16 mx-auto text-navy-100 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <h3 className="text-xl font-bold text-navy-dark mb-2">No Properties Found</h3>
              <p className="text-navy-dark/60">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
