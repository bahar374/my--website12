import Hero from '@/sections/Hero'
import AboutSection from '@/sections/AboutSection'
import FeaturedProperties from '@/sections/FeaturedProperties'
import ServicesSection from '@/sections/ServicesSection'
import WhyChooseSection from '@/sections/WhyChooseSection'
import TeamSection from '@/sections/TeamSection'
import CTASection from '@/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
