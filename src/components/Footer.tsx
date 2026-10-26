import Logo from './Logo'
import { Bee, FlowerCluster, ForestSilhouette } from './Decor'
import { InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, TelegramIcon, WhatsappIcon, YoutubeIcon } from './Icons'
import { contact, footerNote, footerQuote, legalLinks, quickLinks, socials } from '../data/site'

const socialIcons = {
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsappIcon,
  youtube: YoutubeIcon,
} as const

export default function Footer() {
  return (
    <footer id="site-footer" className="relative overflow-hidden bg-forest-deep pt-14 text-warm sm:pt-16">
      {/* decorative nature layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hex-pattern absolute inset-x-0 top-0 h-32 opacity-[0.08]" />
        <ForestSilhouette className="absolute inset-x-0 bottom-0 h-24 w-full text-[#0d5138] opacity-90" />
        <FlowerCluster className="absolute -bottom-4 right-2 h-24 w-32 opacity-70 sm:right-8 sm:h-28 sm:w-36" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-9 pb-10 sm:grid-cols-2 min-[900px]:grid-cols-[1.1fr_0.85fr_0.95fr_1.15fr] min-[900px]:gap-8">
          {/* brand — left column on desktop */}
          <div className="order-1 min-[900px]:order-4">
            <Logo variant="light" />
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-honey/85 transition-colors duration-200 hover:text-honey-light"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* contact — right column on desktop */}
          <div id="contact" className="order-2">
            <h3 className="text-base font-bold text-honey sm:text-lg">تماس با ما</h3>
            <ul className="mt-4 space-y-3 text-sm text-warm/80">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-honey" />
                <a href={contact.phoneHref} dir="ltr" className="transition-colors hover:text-honey">
                  {contact.phoneLabel}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-honey" />
                <a href={contact.emailHref} dir="ltr" className="transition-colors hover:text-honey">
                  {contact.emailLabel}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <span>{contact.addressLabel}</span>
              </li>
            </ul>
          </div>

          {/* quick access — middle column on desktop */}
          <nav aria-label="دسترسی سریع" className="order-3">
            <h3 className="text-base font-bold text-warm sm:text-lg">دسترسی سریع</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-warm/80 transition-colors duration-200 hover:text-honey"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* decorative bee + quote — far right on desktop */}
          <div aria-hidden="true" className="order-4 min-[900px]:order-1">
            <svg viewBox="0 0 220 60" className="h-10 w-40 overflow-visible text-honey/50" fill="none">
              <path
                d="M4 40C52 40 86 14 130 18c28 2 44 18 74 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeDasharray="4 6"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-1 flex items-center gap-3">
              <Bee className="h-10 w-12 animate-bee-drift" />
              <p className="text-sm font-bold text-honey">{footerQuote}</p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-warm/15 py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-warm/70 sm:flex-row sm:text-sm">
            <p>{footerNote}</p>
            <ul className="flex items-center gap-3">
              {legalLinks.map((link, index) => (
                <li key={link.label} className="flex items-center gap-3">
                  <a href={link.href} className="transition-colors duration-200 hover:text-honey">
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 ? <span className="text-warm/30">|</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
