import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function CTASection() {
  return (
    <section className="py-section bg-navy-50">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left: Icon + text */}
            <div className="flex items-center gap-6 md:gap-8">
              <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-full border-2 border-champagne text-champagne">
                <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
              <div>
                <h2 className="text-section text-navy-dark leading-tight">
                  Ready to Find Your<br />Perfect Property?
                </h2>
                <p className="mt-3 text-navy-dark/60 text-lg">
                  Let our experts guide you to the right home or investment.
                </p>
              </div>
            </div>

            {/* Right: CTA button */}
            <div className="shrink-0">
              <Link to="/contact" className="btn-primary group text-base">
                Get in Touch
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
