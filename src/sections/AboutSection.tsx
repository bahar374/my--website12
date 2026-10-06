import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const mainImage = 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&auto=format&fit=crop&q=80'
const secondaryImage = 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80'

export default function AboutSection() {
  return (
    <section className="py-section bg-white">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <ScrollReveal>
            <span className="section-label">About Us</span>
            <h2 className="text-section text-navy-dark mt-4 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-navy-dark/70 leading-relaxed mb-8 max-w-lg">
              At Horizon Properties, we connect people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction are at the heart of everything we do.
            </p>
            <Link to="/about" className="btn-primary group">
              Learn More
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Right: Image composition */}
          <ScrollReveal delay={200}>
            <div className="relative grid grid-cols-5 grid-rows-6 gap-4 h-[480px] md:h-[560px]">
              {/* Main image */}
              <div className="col-span-3 row-span-6 overflow-hidden rounded-lg-card group">
                <img
                  src={mainImage}
                  alt="Luxury modern home with pool"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              {/* Secondary image */}
              <div className="col-span-2 row-span-4 row-start-2 overflow-hidden rounded-lg-card group">
                <img
                  src={secondaryImage}
                  alt="Luxury interior"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              {/* Circular arrow button */}
              <div className="absolute -bottom-4 -left-4 z-10">
                <Link
                  to="/about"
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-champagne text-navy-dark shadow-xl hover:bg-navy-dark hover:text-white transition-all duration-500 ease-premium group/btn"
                  aria-label="Learn more about us"
                >
                  <svg className="h-6 w-6 transition-transform duration-500 group-hover/btn:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
