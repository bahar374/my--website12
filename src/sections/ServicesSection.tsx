import ScrollReveal from '../components/ScrollReveal'
import { services } from '../data/services'

const serviceIcons: Record<string, React.ReactNode> = {
  home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" />,
  trending: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
  megaphone: <><path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>,
  compass: <><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></>,
  calculator: <><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="14" x2="8" y2="14" /><line x1="12" y1="14" x2="12" y2="14" /><line x1="16" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="8" y2="18" /><line x1="12" y1="18" x2="12" y2="18" /><line x1="16" y1="18" x2="16" y2="18" /></>,
  map: <><polygon points="1 6 1 22 8 18 16 22 22 18 22 2 15 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></>,
}

export default function ServicesSection() {
  return (
    <section className="py-section bg-white">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label">Services</span>
            <h2 className="text-section text-navy-dark mt-4">
              What We Offer
            </h2>
            <p className="mt-4 text-navy-dark/60 max-w-xl mx-auto">
              Comprehensive real estate services tailored to meet the needs of discerning buyers, sellers, and investors.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-50 rounded-lg-card overflow-hidden">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <div className="group bg-white p-8 md:p-10 h-full transition-all duration-500 ease-premium hover:bg-warm-gray cursor-default">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-champagne/30 text-champagne group-hover:bg-champagne group-hover:text-navy-dark transition-all duration-500">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {serviceIcons[service.icon]}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-dark mb-3 group-hover:text-navy transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy-dark/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
