import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Carousel from '../components/Carousel'
import PropertyCard from '../components/PropertyCard'
import { properties } from '../data/properties'

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured)

  return (
    <section className="py-section bg-warm-gray">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label">Featured</span>
            <h2 className="text-section text-navy-dark mt-4">
              Featured Properties
            </h2>
            <p className="mt-4 text-navy-dark/60 max-w-xl mx-auto">
              Explore our handpicked selection of premium properties, each offering exceptional design, location, and investment potential.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Carousel
            itemClassName="w-[300px] sm:w-[340px] md:w-[380px]"
          >
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </Carousel>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Link to="/properties" className="btn-outline-dark group">
              View All Properties
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
