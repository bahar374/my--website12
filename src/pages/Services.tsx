import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Home, TrendingUp, Handshake, Building2, Search, FileText } from 'lucide-react'

const services = [
  { icon: Home, title: 'Property Buying', text: 'From first viewing to final closing, we guide you through every step of acquiring your dream home with confidence and clarity.' },
  { icon: TrendingUp, title: 'Investment Advisory', text: 'Strategic guidance on building and managing a real estate portfolio, with deep market analysis and growth potential assessment.' },
  { icon: Handshake, title: 'Property Selling', text: 'A curated marketing approach that positions your property to the right audience, maximizing value and minimizing time on market.' },
  { icon: Building2, title: 'Development Consulting', text: 'Expert guidance for developers and investors on project feasibility, market positioning, and sales strategy.' },
  { icon: Search, title: 'Property Valuation', text: 'Comprehensive appraisal services backed by decades of market data and architectural expertise.' },
  { icon: FileText, title: 'Transaction Management', text: 'End-to-end management of the entire transaction process, ensuring a seamless and stress-free experience.' },
]

export default function Services() {
  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-champagne" />
              <span className="section-label">What We Offer</span>
            </div>
            <h1 className="text-ivory font-display font-bold text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4">Our Services</h1>
            <p className="text-ivory/60 text-lg max-w-xl">
              Comprehensive real estate services designed to support you at every stage of the property journey.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 border border-navy-100 rounded-sm hover:border-champagne/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors">
                  <s.icon size={24} strokeWidth={1.5} className="text-champagne-dark" />
                </div>
                <h3 className="text-navy-900 font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-navy-500 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 text-ivory px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-navy-800 hover:gap-3">
              Schedule a Consultation
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
