import { useMemo, useState } from 'react'
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import PropertyCard from '@/components/PropertyCard'
import Reveal from '@/components/Reveal'
import { CloseIcon, SearchIcon, SlidersIcon } from '@/components/Icons'
import { PRICE_BOUNDS, PROPERTIES, PROPERTY_TYPES, type PropertyType } from '@/data/properties'
import { formatCompactPrice } from '@/lib/format'
import { IMG } from '@/lib/images'

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'sqft-desc'

const SORTS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured first' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'sqft-desc', label: 'Largest first' },
]

export default function Properties() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('All')
  const [type, setType] = useState<'All' | PropertyType>('All')
  const [minBeds, setMinBeds] = useState(0)
  const [minBaths, setMinBaths] = useState(0)
  const [maxPrice, setMaxPrice] = useState(PRICE_BOUNDS.max)
  const [sort, setSort] = useState<SortKey>('featured')
  const [showFilters, setShowFilters] = useState(false)

  const locations = useMemo(
    () => ['All', ...Array.from(new Set(PROPERTIES.map((p) => `${p.city}, ${p.region}`)))],
    [],
  )

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()

    const filtered = PROPERTIES.filter((property) => {
      const haystack = [property.title, property.city, property.region, property.country, property.type]
        .join(' ')
        .toLowerCase()

      return (
        (!needle || haystack.includes(needle)) &&
        (location === 'All' || `${property.city}, ${property.region}` === location) &&
        (type === 'All' || property.type === type) &&
        property.beds >= minBeds &&
        property.baths >= minBaths &&
        property.price <= maxPrice
      )
    })

    const sorted = [...filtered]
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'sqft-desc':
        sorted.sort((a, b) => b.sqft - a.sqft)
        break
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured))
    }
    return sorted
  }, [query, location, type, minBeds, minBaths, maxPrice, sort])

  const activeFilterCount =
    (location !== 'All' ? 1 : 0) +
    (type !== 'All' ? 1 : 0) +
    (minBeds > 0 ? 1 : 0) +
    (minBaths > 0 ? 1 : 0) +
    (maxPrice < PRICE_BOUNDS.max ? 1 : 0)

  const resetFilters = () => {
    setQuery('')
    setLocation('All')
    setType('All')
    setMinBeds(0)
    setMinBaths(0)
    setMaxPrice(PRICE_BOUNDS.max)
    setSort('featured')
  }

  return (
    <>
      <PageHeader
        image={IMG.aboutPrimary}
        eyebrow="Portfolio"
        title="Find Your Next Exceptional Property"
        description="Browse our full collection of villas, estates, residences and penthouses — then filter down to exactly what you are looking for."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Properties' }]}
      />

      <section className="section bg-stone">
        <div className="container">
          {/* Search + primary filters */}
          <div className="rounded-2.5xl border border-navy/10 bg-white p-4 shadow-soft sm:p-5">
            <div className="grid gap-3 lg:grid-cols-12">
              <div className="relative lg:col-span-4">
                <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by name, city or keyword"
                  aria-label="Search properties"
                  className="field pl-11"
                />
              </div>

              <div className="lg:col-span-3">
                <label htmlFor="filter-location" className="sr-only">
                  Location
                </label>
                <select
                  id="filter-location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="field"
                >
                  {locations.map((option) => (
                    <option key={option} value={option}>
                      {option === 'All' ? 'All locations' : option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="filter-type" className="sr-only">
                  Property type
                </label>
                <select
                  id="filter-type"
                  value={type}
                  onChange={(event) => setType(event.target.value as 'All' | PropertyType)}
                  className="field"
                >
                  <option value="All">All types</option>
                  {PROPERTY_TYPES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-3">
                <button
                  type="button"
                  onClick={() => setShowFilters((value) => !value)}
                  aria-expanded={showFilters}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-navy/15 px-4 py-3 text-sm font-medium text-navy transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white"
                >
                  <SlidersIcon className="h-4 w-4" />
                  {showFilters ? 'Hide filters' : 'More filters'}
                  {activeFilterCount > 0 && (
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1.5 text-[0.68rem] font-semibold text-navy">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="mt-4 grid gap-5 border-t border-navy/10 pt-5 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label htmlFor="filter-beds" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                    Bedrooms
                  </label>
                  <select
                    id="filter-beds"
                    value={minBeds}
                    onChange={(event) => setMinBeds(Number(event.target.value))}
                    className="field mt-2"
                  >
                    <option value={0}>Any</option>
                    {[2, 3, 4, 5, 6].map((option) => (
                      <option key={option} value={option}>
                        {option}+
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="filter-baths" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                    Bathrooms
                  </label>
                  <select
                    id="filter-baths"
                    value={minBaths}
                    onChange={(event) => setMinBaths(Number(event.target.value))}
                    className="field mt-2"
                  >
                    <option value={0}>Any</option>
                    {[2, 3, 4, 5, 6].map((option) => (
                      <option key={option} value={option}>
                        {option}+
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="filter-price" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                    Maximum price
                  </label>
                  <input
                    id="filter-price"
                    type="range"
                    min={PRICE_BOUNDS.min}
                    max={PRICE_BOUNDS.max}
                    step={50000}
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(Number(event.target.value))}
                    className="mt-3 w-full accent-champagne"
                  />
                  <div className="mt-1 flex items-center justify-between text-[0.75rem] text-ink-soft">
                    <span>{formatCompactPrice(PRICE_BOUNDS.min)}</span>
                    <span className="font-medium text-navy">
                      {maxPrice >= PRICE_BOUNDS.max ? 'Any price' : `Up to ${formatCompactPrice(maxPrice)}`}
                    </span>
                    <span>{formatCompactPrice(PRICE_BOUNDS.max)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results header */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-soft">
              <span className="font-medium text-navy">{results.length}</span>{' '}
              {results.length === 1 ? 'property' : 'properties'} found
            </p>

            <div className="flex items-center gap-3">
              {(activeFilterCount > 0 || query) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-navy/60 transition-colors duration-300 hover:text-navy"
                >
                  <CloseIcon className="h-3.5 w-3.5" />
                  Clear all
                </button>
              )}
              <label htmlFor="sort-by" className="sr-only">
                Sort by
              </label>
              <select
                id="sort-by"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="field w-auto py-2.5 text-[0.8rem]"
              >
                {SORTS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results grid */}
          {results.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((property, index) => (
                <Reveal key={property.id} delay={Math.min(index, 5) * 60}>
                  <PropertyCard property={property} showDetails className="h-full" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2.5xl border border-dashed border-navy/20 bg-white px-6 py-16 text-center">
              <h2 className="font-display text-xl font-bold text-navy">No properties match those filters</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                Try widening your price range or clearing a filter — or tell us what you are looking for and
                we will search off-market on your behalf.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button onClick={resetFilters} variant="outline">
                  Clear filters
                </Button>
                <Button to="/contact">Speak to an advisor</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
