import ScrollReveal from '../components/ScrollReveal'
import { whyChooseItems } from '../data/services'

export default function WhyChooseSection() {
  return (
    <section className="py-section bg-navy-dark text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-champagne blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-champagne blur-3xl" />
      </div>

      <div className="container-luxe relative">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label">Why Choose Us</span>
            <h2 className="text-section text-white mt-4">
              Why Choose Horizon
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              We combine deep market expertise with a commitment to excellence, delivering results that exceed expectations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100}>
              <div className="text-center group">
                <div className="mb-5">
                  <div className="inline-block text-5xl font-bold text-champagne transition-transform duration-500 ease-premium group-hover:scale-110">
                    {item.stat}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-2">{item.description}</p>
                <span className="text-xs uppercase tracking-wider text-champagne/70">{item.statLabel}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
