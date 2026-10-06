import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-champagne" />
              <span className="section-label">About Us</span>
            </div>
            <h2 className="text-navy-900 font-display font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight mb-6">
              Who We Are
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed mb-8 max-w-lg">
              Horizon Properties is a boutique real estate firm specializing in luxury homes and investment
              properties across the country's most sought-after locations. With over two decades of
              experience, our team brings an editorial eye and architectural sensibility to every
              transaction — curating a portfolio of residences that stand apart in design, quality, and value.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-navy-900 text-ivory px-7 py-3.5 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-navy-800 hover:gap-3"
            >
              Learn More
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Primary image */}
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/images/about-primary.jpg"
                alt="Architectural property exterior"
                className="w-full h-[400px] lg:h-[480px] object-cover transition-transform duration-700 ease-lux hover:scale-105"
              />
            </div>

            {/* Secondary overlapping image */}
            <div className="absolute -bottom-8 -left-4 lg:-left-8 w-40 h-52 lg:w-52 lg:h-64 overflow-hidden rounded-sm shadow-2xl border-4 border-ivory hidden sm:block">
              <img
                src="/images/about-secondary.jpg"
                alt="Interior detail"
                className="w-full h-full object-cover blur-[1px] scale-110"
              />
            </div>

            {/* Circular arrow button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-6 right-4 lg:right-8 w-14 h-14 rounded-full bg-champagne flex items-center justify-center cursor-pointer shadow-xl"
            >
              <ArrowUpRight size={22} strokeWidth={1.5} className="text-navy-900" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
