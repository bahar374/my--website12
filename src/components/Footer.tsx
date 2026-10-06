import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { BRAND, CONTACT, NAV_LINKS, SOCIALS } from '@/data/site'
import { SERVICES } from '@/data/services'
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from './Icons'

const socialIcons: Record<string, (props: { className?: string }) => JSX.Element> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Pinterest: FacebookIcon,
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    if (!subscribed) return
    const timer = window.setTimeout(() => setSubscribed(false), 6000)
    return () => window.clearTimeout(timer)
  }, [subscribed])

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{BRAND.description}</p>
            <ul className="mt-7 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = socialIcons[social.label] ?? InstagramIcon
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 ease-premium hover:border-champagne hover:bg-champagne hover:text-navy"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-label text-champagne">
              Explore
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-label text-champagne">
              Services
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-label text-champagne">
              Contact
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 text-champagne" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2.5 break-all text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-champagne" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                {CONTACT.address}
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-7">
              <label
                htmlFor="footer-newsletter"
                className="font-display text-[0.72rem] font-semibold uppercase tracking-label text-champagne"
              >
                Newsletter
              </label>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-1.5 focus-within:border-champagne/60">
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to the newsletter"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-champagne text-navy transition-colors duration-300 hover:bg-champagne-light"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
              <p aria-live="polite" className="mt-3 min-h-[1.1rem] text-xs text-champagne">
                {subscribed ? 'Thank you — you are on the list.' : ''}
              </p>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>{CONTACT.hours}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
