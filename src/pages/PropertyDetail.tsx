import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Maximize, ArrowLeft, Check, Calendar } from 'lucide-react'
import { properties } from '../data/properties'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)
  const [activeImage, setActiveImage] = useState(0)

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-navy-400 text-lg mb-4">Property not found.</p>
        <Link to="/properties" className="text-champagne-dark font-semibold hover:underline">Back to Properties</Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-navy-900 py-6">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <Link to="/properties" className="inline-flex items-center gap-2 text-ivory/60 text-sm hover:text-champagne transition-colors">
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-navy-900 pb-12">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            <div className="lg:col-span-2 overflow-hidden rounded-sm">
              <img
                src={property.gallery[activeImage]}
                alt={property.title}
                className="w-full h-[300px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="flex flex-row lg:flex-col gap-4">
              {property.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-1 overflow-hidden rounded-sm transition-all duration-300 ${
                    activeImage === i ? 'ring-2 ring-champagne' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-24 lg:h-32 object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Details */}
      <div className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-champagne" />
                <span className="section-label">{property.type}</span>
              </div>
              <h1 className="text-navy-900 font-display font-bold text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-3">
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 text-navy-500 text-lg mb-8">
                <MapPin size={18} strokeWidth={1.5} className="text-champagne" />
                {property.location}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 border-y border-navy-100 py-6">
                <div className="flex flex-col items-center text-center">
                  <BedDouble size={24} strokeWidth={1.5} className="text-champagne mb-2" />
                  <span className="text-navy-900 font-display font-bold text-2xl">{property.beds}</span>
                  <span className="text-navy-400 text-sm">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center text-center border-x border-navy-100">
                  <Bath size={24} strokeWidth={1.5} className="text-champagne mb-2" />
                  <span className="text-navy-900 font-display font-bold text-2xl">{property.baths}</span>
                  <span className="text-navy-400 text-sm">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Maximize size={24} strokeWidth={1.5} className="text-champagne mb-2" />
                  <span className="text-navy-900 font-display font-bold text-2xl">{property.sqft.toLocaleString()}</span>
                  <span className="text-navy-400 text-sm">Sq Ft</span>
                </div>
              </div>

              <h2 className="text-navy-900 font-display font-bold text-2xl mb-4">About This Property</h2>
              <p className="text-navy-500 text-lg leading-relaxed mb-8">{property.description}</p>

              <h2 className="text-navy-900 font-display font-bold text-2xl mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-navy-700">
                    <div className="w-5 h-5 rounded-full bg-champagne/15 flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={2.5} className="text-champagne-dark" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-navy-50 rounded-2xl p-8">
                <div className="mb-6">
                  <span className="text-navy-400 text-sm uppercase tracking-wider">Listing Price</span>
                  <p className="text-navy-900 font-display font-bold text-3xl mt-1">{property.price}</p>
                </div>
                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex justify-between border-b border-navy-100 pb-3">
                    <span className="text-navy-400">Type</span>
                    <span className="text-navy-900 font-semibold">{property.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-100 pb-3">
                    <span className="text-navy-400">Status</span>
                    <span className="text-champagne-dark font-semibold">{property.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Location</span>
                    <span className="text-navy-900 font-semibold text-right">{property.location}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 text-ivory px-6 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-navy-800 hover:gap-3"
                >
                  <Calendar size={16} strokeWidth={2} />
                  Request Private Viewing
                </Link>
                <a
                  href="tel:5552467890"
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 border border-navy-200 text-navy-900 px-6 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:border-champagne hover:text-champagne-dark"
                >
                  (555) 246-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
