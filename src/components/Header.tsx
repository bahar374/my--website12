import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-lux ${
          solid
            ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-500 ${solid ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-transform duration-500 group-hover:scale-105">
                <path d="M6 26V14L16 7L26 14V26" stroke="#BFA17A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 26V18M21 26V18M16 26V18" stroke="#BFA17A" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-ivory font-display font-bold text-sm tracking-[0.15em] uppercase">Horizon</span>
                <span className="text-champagne font-display text-[0.65rem] tracking-[0.3em] uppercase mt-0.5">Properties</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                      active ? 'text-champagne' : 'text-ivory/80 hover:text-ivory'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-px bg-champagne"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Phone CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:5552467890"
                className="inline-flex items-center gap-2 border border-ivory/30 text-ivory px-5 py-2.5 text-[0.8125rem] font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:border-champagne hover:text-champagne"
              >
                <Phone size={14} strokeWidth={1.5} />
                (555) 246-7890
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-ivory p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-lg lg:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-display font-semibold tracking-wide transition-colors ${
                        active ? 'text-champagne' : 'text-ivory hover:text-champagne'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="pb-12 flex flex-col items-center gap-4"
            >
              <a
                href="tel:5552467890"
                className="inline-flex items-center gap-2 border border-champagne/50 text-champagne px-6 py-3 text-sm font-semibold tracking-wide rounded-sm"
              >
                <Phone size={16} strokeWidth={1.5} />
                (555) 246-7890
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
