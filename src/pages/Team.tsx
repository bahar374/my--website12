import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'

const team = [
  { name: 'Eleanor Vance', role: 'Founder & Principal Broker', image: '/images/team-1.jpg' },
  { name: 'Marcus Chen', role: 'Director of Investments', image: '/images/team-2.jpg' },
  { name: 'Sofia Reyes', role: 'Lead Property Specialist', image: '/images/team-3.jpg' },
  { name: 'James Whitfield', role: 'Architectural Advisor', image: '/images/team-4.jpg' },
]

export default function Team() {
  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-champagne" />
              <span className="section-label">The People</span>
            </div>
            <h1 className="text-ivory font-display font-bold text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4">Our Team</h1>
            <p className="text-ivory/60 text-lg max-w-xl">
              A dedicated group of professionals bringing expertise, integrity, and passion to every client relationship.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="#" className="w-10 h-10 rounded-full bg-ivory/90 flex items-center justify-center text-navy-900 hover:bg-champagne transition-colors">
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-ivory/90 flex items-center justify-center text-navy-900 hover:bg-champagne transition-colors">
                      <Mail size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
                <h3 className="text-navy-900 font-display font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-champagne-dark text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 text-ivory px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-navy-800 hover:gap-3">
              Join Our Team
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
