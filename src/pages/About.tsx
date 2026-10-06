import ScrollReveal from '../components/ScrollReveal'
import AboutSection from '../sections/AboutSection'
import WhyChooseSection from '../sections/WhyChooseSection'
import CTASection from '../sections/CTASection'

const aboutHeroImage = 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=2000&auto=format&fit=crop&q=80'

export default function About() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={aboutHeroImage} alt="Luxury property" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-navy-dark/50" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <ScrollReveal>
            <span className="section-label">About Us</span>
            <h1 className="text-section text-white mt-4">Who We Are</h1>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />

      {/* Mission & Values */}
      <section className="py-section bg-white">
        <div className="container-luxe">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="section-label">Our Mission</span>
                <h2 className="text-section text-navy-dark mt-4 mb-6">
                  Building Trust Through Excellence
                </h2>
                <p className="text-lg text-navy-dark/70 leading-relaxed mb-6">
                  For over two decades, Horizon Properties has been a trusted name in luxury real estate. We believe that finding the right property is about more than just square footage — it's about finding a place that resonates with your aspirations and lifestyle.
                </p>
                <p className="text-lg text-navy-dark/70 leading-relaxed">
                  Our team combines deep market knowledge with a genuine passion for architecture and design, ensuring every client receives personalized service that goes beyond expectations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Integrity', desc: 'Honest, transparent dealings in every transaction.' },
                  { label: 'Excellence', desc: 'Uncompromising standards in service and results.' },
                  { label: 'Expertise', desc: 'Deep market knowledge and architectural insight.' },
                  { label: 'Dedication', desc: 'Committed to your goals from start to finish.' },
                ].map((value) => (
                  <div key={value.label} className="p-6 rounded-card bg-warm-gray">
                    <h3 className="text-lg font-bold text-navy-dark mb-2">{value.label}</h3>
                    <p className="text-sm text-navy-dark/60">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WhyChooseSection />
      <CTASection />
    </>
  )
}
