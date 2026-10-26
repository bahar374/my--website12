import Hero from '../sections/Hero'
import BenefitsBar from '../sections/BenefitsBar'
import Categories from '../sections/Categories'
import BestSellers from '../sections/BestSellers'
import StoryBanner from '../sections/StoryBanner'
import GiftBanner from '../sections/GiftBanner'
import BrandStory from '../sections/BrandStory'
import Testimonials from '../sections/Testimonials'
import NewsletterSection from '../sections/NewsletterSection'

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <Categories />
      <BestSellers />
      <StoryBanner />
      <GiftBanner />
      <BrandStory />
      <Testimonials />
      <NewsletterSection />
    </>
  )
}
