import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MapPin, BedDouble, Bath, Maximize } from 'lucide-react'
import { properties } from '../data/properties'

export default function FeaturedProperties() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const featured = properties.slice(0, 4)

  const next = () => setActiveIndex((prev) => (prev + 1) % featured.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + featured.length) % featured.length)

  return (
    <section className="py-24 lg:py-32 bg-navy-50/50">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-champagne" />
              <span className="section-label">Featured</span>
            </div>
            <h2 className="text-navy-900 font-display font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
              Featured Properties
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-navy-200 flex items-center justify-center text-navy-700 transition-all duration-300 ease-lux hover:border-navy-900 hover:bg-navy-900 hover:text-ivory"
              aria-label="Previous property"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-navy-200 flex items-center justify-center text-navy-700 transition-all duration-300 ease-lux hover:border-navy-900 hover:bg-navy-900 hover:text-ivory"
              aria-label="Next property"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${activeIndex} * (100% + 1.5rem))` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: `${featured.length * 100}%` }}
          >
            {featured.map((property, index) => (
              <div
                key={property.id}
                className="flex-shrink-0"
                style={{ width: `${100 / featured.length}%` }}
              >
                <PropertyCard property={property} active={index === activeIndex} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-10 bg-champagne' : 'w-1.5 bg-navy-200'
              }`}
              aria-label={`Go to property ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PropertyCard({ property, active }: { property: typeof properties[0]; active: boolean }) {
  return (
    <Link to={`/properties/${property.id}`} className="block group">
      <div className="relative overflow-hidden rounded-sm bg-navy-100 mb-5">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-700 ease-lux group-hover:scale-105"
          />
        </div>
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-champagne text-navy-900 px-4 py-2 text-sm font-bold tracking-wide rounded-sm shadow-lg">
          {property.price}
        </div>
        {/* Status badge */}
        <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-sm text-ivory px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider rounded-sm">
          {property.status}
        </div>
      </div>

      <div className="px-1">
        <h3 className="text-navy-900 font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-champagne-dark transition-colors duration-300">
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
  )
}
