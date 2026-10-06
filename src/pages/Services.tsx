import ScrollReveal from '../components/ScrollReveal'
import ServicesSection from '../sections/ServicesSection'
import WhyChooseSection from '../sections/WhyChooseSection'
import CTASection from '../sections/CTASection'

const servicesHeroImage = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=2000&auto=format&fit=crop&q=80'

export default function Services() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={servicesHeroImage} alt="Luxury property" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-navy-dark/50" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <ScrollReveal>
            <span className="section-label">Services</span>
            <h1 className="text-section text-white mt-4">What We Offer</h1>
          </ScrollReveal>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
    </>
  )
}
