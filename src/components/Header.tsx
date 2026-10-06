import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { CONTACT, NAV_LINKS } from '@/data/site'
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons'

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const onHome = pathname === '/'
  const solid = !onHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = open ? 'hidden' : previous
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
          solid
            ? 'border-b border-navy/10 bg-white/95 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container flex h-[74px] items-center justify-between gap-6 lg:h-[86px]">
          <Link to="/" aria-label="Horizon Properties — home" className="shrink-0">
            <Logo variant={solid ? 'dark' : 'light'} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative py-1 text-[0.82rem] font-medium tracking-wide transition-colors duration-300',
                    'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-champagne after:transition-all after:duration-300',
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                    solid
                      ? isActive
                        ? 'text-navy'
                        : 'text-navy/60 hover:text-navy'
                      : isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={CONTACT.phoneHref}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[0.78rem] font-medium transition-all duration-300 ease-premium ${
                solid
                  ? 'border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white'
                  : 'border-white/45 text-white hover:bg-white hover:text-navy'
              }`}
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {CONTACT.phone}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300 lg:hidden ${
              solid ? 'border-navy/15 text-navy' : 'border-white/35 text-white'
            }`}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-[70] lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-[22rem] flex-col bg-navy-950 px-6 py-6 transition-transform duration-500 ease-premium ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-navy"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex flex-col">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={{ transitionDelay: open ? `${110 + index * 45}ms` : '0ms' }}
                className={({ isActive }) =>
                  [
                    'border-b border-white/10 py-4 font-display text-xl font-semibold transition-all duration-500 ease-premium',
                    open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0',
                    isActive ? 'text-champagne' : 'text-white/90 hover:text-champagne',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-10">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy"
            >
              <PhoneIcon className="h-4 w-4" />
              {CONTACT.phone}
            </a>
            <p className="text-xs leading-relaxed text-white/45">{CONTACT.address}</p>
          </div>
        </div>
      </div>
    </>
  )
}
