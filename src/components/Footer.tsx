import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ],
  Properties: [
    { label: 'Featured Listings', path: '/properties' },
    { label: 'Luxury Homes', path: '/properties' },
    { label: 'Investment Properties', path: '/properties' },
    { label: 'New Developments', path: '/properties' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-ivory overflow-hidden">
      {/* Large monogram watermark */}
      <div className="absolute -right-10 -bottom-20 pointer-events-none select-none opacity-[0.04]">
        <span className="font-display font-bold text-[20rem] leading-none text-ivory">H</span>
      </div>

      <div className="relative max-w-container mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 26V14L16 7L26 14V26" stroke="#BFA17A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 26V18M21 26V18M16 26V18" stroke="#BFA17A" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-ivory font-display font-bold text-sm tracking-[0.15em] uppercase">Horizon</span>
                <span className="text-champagne font-display text-[0.65rem] tracking-[0.3em] uppercase mt-0.5">Properties</span>
              </div>
            </Link>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs mb-6">
              Curating exceptional homes and investment properties with an editorial eye and architectural sensibility.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 transition-all duration-300 hover:border-champagne hover:text-champagne"
                  aria-label="Social media"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-ivory font-display font-semibold text-sm uppercase tracking-[0.12em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-ivory/60 text-sm transition-colors duration-300 hover:text-champagne"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-ivory font-display font-semibold text-sm uppercase tracking-[0.12em] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:5552467890" className="flex items-start gap-3 text-ivory/60 text-sm transition-colors duration-300 hover:text-champagne">
                  <Phone size={16} strokeWidth={1.5} className="text-champagne mt-0.5 flex-shrink-0" />
                  (555) 246-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@horizonproperties.com" className="flex items-start gap-3 text-ivory/60 text-sm transition-colors duration-300 hover:text-champagne">
                  <Mail size={16} strokeWidth={1.5} className="text-champagne mt-0.5 flex-shrink-0" />
                  info@horizonproperties.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-ivory/60 text-sm">
                <MapPin size={16} strokeWidth={1.5} className="text-champagne mt-0.5 flex-shrink-0" />
                1200 Architectural Way,<br />Suite 400, New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Horizon Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-ivory/40 text-xs tracking-wide transition-colors hover:text-champagne">Privacy Policy</a>
            <a href="#" className="text-ivory/40 text-xs tracking-wide transition-colors hover:text-champagne">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
