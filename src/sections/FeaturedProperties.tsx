import Button from '@/components/Button'
import Carousel from '@/components/Carousel'
import PropertyCard from '@/components/PropertyCard'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { ArrowRightIcon } from '@/components/Icons'
import { PROPERTIES } from '@/data/properties'

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter((property) => property.featured)

  return (
    <section className="section bg-stone">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Featured"
            title="Featured Properties"
            description="A curated selection of exceptional homes and investment opportunities, hand-picked by our advisors."
          />
        </Reveal>
      </div>

      <div className="container mt-12">
        <Reveal delay={80}>
          <Carousel ariaLabel="Featured properties">
            {featured.map((property) => (
              <div
                key={property.id}
                className="w-[85vw] shrink-0 snap-start sm:w-[400px] lg:w-[440px]"
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </Carousel>
        </Reveal>
      </div>

      <div className="container mt-12 flex justify-center">
        <Button to="/properties" variant="outline" icon={<ArrowRightIcon className="h-4 w-4" />}>
          View All Properties
        </Button>
      </div>
    </section>
  )
}
