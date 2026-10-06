import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { teamMembers } from '../data/team'

export default function TeamSection() {
  return (
    <section className="py-section bg-warm-gray">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label">Our Team</span>
            <h2 className="text-section text-navy-dark mt-4">
              Meet the Experts
            </h2>
            <p className="mt-4 text-navy-dark/60 max-w-xl mx-auto">
              Our experienced team of real estate professionals is dedicated to helping you find the perfect property.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 100}>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg-card mb-5 aspect-[3/4]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Social links */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-navy-dark hover:bg-champagne transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-navy-dark hover:bg-champagne transition-all duration-300"
                      aria-label={`Call ${member.name}`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-navy-dark hover:bg-champagne transition-all duration-300"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy-dark text-center">{member.name}</h3>
                <p className="text-sm text-champagne text-center mt-1">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Link to="/team" className="btn-outline-dark group">
              View Full Team
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
