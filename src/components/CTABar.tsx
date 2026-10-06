import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Key } from 'lucide-react'

export default function CTABar() {
  return (
    <section className="py-16 lg:py-20 bg-ivory">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-navy-50 rounded-2xl px-8 py-12 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Icon + text */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-champagne/15 flex items-center justify-center flex-shrink-0">
              <Key size={28} strokeWidth={1.5} className="text-champagne-dark" />
            </div>
            <div>
              <h3 className="text-navy-900 font-display font-bold text-xl lg:text-2xl mb-1">
                Ready to Find Your Perfect Property?
              </h3>
              <p className="text-navy-500 text-base lg:text-lg">
                Let our experts guide you to the right home or investment.
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 text-ivory px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-navy-800 hover:gap-3 flex-shrink-0"
          >
            Get In Touch
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
