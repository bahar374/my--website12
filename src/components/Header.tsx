import { useEffect, useState } from 'react'
import Logo from './Logo'
import { CartIcon, CloseIcon, MenuIcon, SearchIcon, UserIcon } from './Icons'
import { useCart } from '../context/CartContext'
import { navLinks } from '../data/site'

export default function Header() {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const faCount = count.toLocaleString('fa-IR')

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur transition-shadow duration-300 ease-soft ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-3 sm:h-20">
        <Logo />

        <nav aria-label="فهرست اصلی" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.label === 'خانه'
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-forest ${
                  isActive ? 'text-forest' : 'text-ink/80'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 right-0 h-[3px] rounded-full bg-honey transition-all duration-300 ease-soft ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <span aria-hidden="true" className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-forest/70 sm:inline-flex">
            <SearchIcon className="h-[1.15rem] w-[1.15rem]" />
          </span>
          <span aria-hidden="true" className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-forest/70 sm:inline-flex">
            <UserIcon className="h-[1.15rem] w-[1.15rem]" />
          </span>

          <a
            href="#products"
            aria-label={count > 0 ? `سبد خرید، ${faCount} کالا` : 'سبد خرید'}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-warm text-forest transition-colors duration-200 hover:border-honey hover:text-honey-dark"
          >
            <CartIcon className="h-[1.15rem] w-[1.15rem]" />
            {count > 0 ? (
              <span className="absolute -left-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-honey px-1 text-[0.65rem] font-bold text-forest-deep">
                {faCount}
              </span>
            ) : null}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'بستن فهرست' : 'باز کردن فهرست'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-warm text-forest lg:hidden"
          >
            {menuOpen ? <CloseIcon className="h-[1.15rem] w-[1.15rem]" /> : <MenuIcon className="h-[1.15rem] w-[1.15rem]" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" aria-label="فهرست موبایل" className="border-t border-line bg-warm lg:hidden">
          <ul className="container-x flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-line/70 py-3 text-sm font-semibold text-ink last:border-b-0 hover:text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
