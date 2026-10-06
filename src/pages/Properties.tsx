import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, BedDouble, Bath, Maximize, Search, SlidersHorizontal } from 'lucide-react'
import { properties } from '../data/properties'

export default function Properties() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const types = useMemo(() => ['All', ...Array.from(new Set(properties.map((p) => p.type)))], [])

  const filtered = useMemo(() => {
    let result = properties.filter(
      (p) =>
        (typeFilter === 'All' || p.type === typeFilter) &&
        (search === '' ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase()))
    )
    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.priceValue - b.priceValue)
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.priceValue - a.priceValue)
    return result
  }, [search, typeFilter, sortBy])

  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-champagne" />
              <span className="section-label">Our Collection</span>
            </div>
            <h1 className="text-ivory font-display font-bold text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4">
              Properties
            </h1>
            <p className="text-ivory/60 text-lg max-w-xl">
              Explore our curated portfolio of exceptional homes and investment opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-ivory/95 backdrop-blur-md border-b border-navy-100 py-4">
        <div className="max-w-container mx-auto px-6 lg:px-10 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-navy-50 border border-navy-200 rounded-sm text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-champagne transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-navy-400" strokeWidth={1.5} />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2.5 bg-navy-50 border border-navy-200 rounded-sm text-sm text-navy-900 focus:outline-none focus:border-champagne transition-colors cursor-pointer"
            >
              {types.map((t) => (
                <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-navy-50 border border-navy-200 rounded-sm text-sm text-navy-900 focus:outline-none focus:border-champagne transition-colors cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-navy-400 text-lg">No properties found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link to={`/properties/${property.id}`} className="block group">
                    <div className="relative overflow-hidden rounded-sm bg-navy-100 mb-5">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-champagne text-navy-900 px-4 py-2 text-sm font-bold tracking-wide rounded-sm shadow-lg">
                        {property.price}
                      </div>
                      <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-sm text-ivory px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider rounded-sm">
                        {property.type}
                      </div>
                    </div>
                    <div className="px-1">
                      <h3 className="text-navy-900 font-display font-bold text-xl mb-2 group-hover:text-champagne-dark transition-colors duration-300">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-navy-500 text-sm mb-4">
                        <MapPin size={14} strokeWidth={1.5} className="text-champagne" />
                        {property.location}
                      </div>
                      <div className="flex items-center gap-5 text-navy-600 text-sm border-t border-navy-100 pt-4">
                        <span className="flex items-center gap-1.5">
                          <BedDouble size={16} strokeWidth={1.5} className="text-champagne" />
                          {property.beds} Beds
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Bath size={16} strokeWidth={1.5} className="text-champagne" />
                          {property.baths} Baths
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Maximize size={16} strokeWidth={1.5} className="text-champagne" />
                          {property.sqft.toLocaleString()} sqft
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
