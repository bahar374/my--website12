import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Eye, Heart, Shield } from 'lucide-react'

const values = [
  { icon: Eye, title: 'Curated Vision', text: 'Every property in our portfolio is selected with an editorial eye for architecture, light, and lasting value.' },
  { icon: Shield, title: 'Trusted Expertise', text: 'Two decades of experience in luxury real estate, backed by a team of dedicated specialists.' },
  { icon: Heart, title: 'Client First', text: 'We build lasting relationships, guiding each client through every step with transparency and care.' },
  { icon: Award, title: 'Excellence', text: 'From first viewing to final closing, we hold ourselves to the highest standard of service.' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="/images/about-hero.jpg"
          alt="Luxury architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-container mx-auto px-6 lg:px-10 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-champagne" />
                <span className="section-label">Our Story</span>
              </div>
              <h1 className="text-ivory font-display font-bold text-4xl lg:text-5xl xl:text-6xl tracking-tight max-w-2xl">
                A New Standard in Real Estate
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-navy-900 font-display font-bold text-3xl lg:text-4xl tracking-tight mb-6">
                Our Philosophy
              </h2>
              <p className="text-navy-500 text-lg leading-relaxed mb-6">
                Horizon Properties was founded on a simple belief: that finding a home should feel like
                discovering a work of art. We approach real estate not as a transaction, but as a curatorial
                practice — selecting residences that embody exceptional design, quality, and place.
              </p>
              <p className="text-navy-500 text-lg leading-relaxed">
                For over twenty years, we have guided discerning clients through the most significant
                purchases of their lives. Our team brings deep market knowledge, architectural sensibility,
                and an unwavering commitment to service.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <img
                src="/images/about-interior.jpg"
                alt="Interior architecture"
                className="w-full h-[400px] object-cover rounded-sm"
              />
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="h-px w-10 bg-champagne" />
                <span className="section-label">What Drives Us</span>
                <span className="h-px w-10 bg-champagne" />
              </div>
              <h2 className="text-navy-900 font-display font-bold text-3xl lg:text-4xl tracking-tight">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-8 border border-navy-100 rounded-sm hover:border-champagne/40 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-5">
                    <v.icon size={24} strokeWidth={1.5} className="text-champagne-dark" />
                  </div>
                  <h3 className="text-navy-900 font-display font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-navy-900 rounded-2xl py-16 px-8 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '20+', label: 'Years of Experience' },
              { num: '500+', label: 'Properties Sold' },
              { num: '$2B+', label: 'In Sales Volume' },
              { num: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-champagne font-display font-bold text-4xl lg:text-5xl mb-2">{stat.num}</p>
                <p className="text-ivory/60 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 text-ivory px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-navy-800 hover:gap-3">
              Work With Us
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
