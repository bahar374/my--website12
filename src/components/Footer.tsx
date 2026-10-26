import Logo from './Logo'
import NewsletterForm from './NewsletterForm'
import { Bee, BeeFlight, FlowerCluster, ForestSilhouette, WoodenHive } from './Decor'
import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from './Icons'
import { brand, contact, footerNote, legalLinks, quickLinks, socials } from '../data/site'

const socialIcons = {
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsappIcon,
  youtube: YoutubeIcon,
} as const

export default function Footer() {
  return (
    <footer id="site-footer" className="relative overflow-hidden bg-forest-deep pt-16 text-warm sm:pt-20">
      {/* organic transition from the light section above */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-12 text-mint sm:h-16">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0 0h1440v30c-150 34-268-14-420 6s-262 32-420 6S168 12 0 46Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* decorative nature layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hex-pattern absolute inset-x-0 top-0 h-32 opacity-[0.10]" />
        <ForestSilhouette className="absolute inset-x-0 bottom-0 h-24 w-full text-[#0d5138] opacity-90" />
        <WoodenHive className="absolute bottom-16 right-4 hidden h-32 w-28 opacity-30 lg:block" />
        <FlowerCluster className="absolute -bottom-8 left-1/2 hidden h-28 w-36 -translate-x-1/2 opacity-45 lg:block" />
        <BeeFlight className="absolute bottom-28 left-6 h-12 w-40 -scale-x-100 opacity-50" />
        <Bee className="absolute bottom-36 left-28 h-9 w-11 animate-bee-drift opacity-90" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* column 1 — brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-7 text-warm/75">{brand.description}</p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm/20 text-warm/80 transition-colors duration-200 hover:border-honey hover:text-honey"
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* column 2 — quick links */}
          <nav aria-label="دسترسی سریع">
            <h3 className="text-base font-bold text-warm sm:text-lg">دسترسی سریع</h3>
            <span className="mt-3 block h-0.5 w-10 rounded-full bg-honey" />
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-warm/75 transition-colors duration-200 hover:text-honey"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-honey/70" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* column 3 — contact */}
          <div id="contact">
            <h3 className="text-base font-bold text-warm sm:text-lg">تماس با ما</h3>
            <span className="mt-3 block h-0.5 w-10 rounded-full bg-honey" />
            <ul className="mt-4 space-y-3 text-sm text-warm/75">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <a href={contact.phoneHref} dir="ltr" className="transition-colors hover:text-honey">
                  {contact.phoneLabel}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <a href={contact.emailHref} dir="ltr" className="transition-colors hover:text-honey">
                  {contact.emailLabel}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <span>{contact.addressLabel}</span>
              </li>
            </ul>
            <p className="mt-4 rounded-card border border-warm/15 bg-warm/5 p-3 text-xs leading-6 text-warm/65">
              {contact.note}
            </p>
          </div>

          {/* column 4 — newsletter */}
          <div>
            <h3 className="text-base font-bold text-warm sm:text-lg">خبرنامه عسلستان</h3>
            <span className="mt-3 block h-0.5 w-10 rounded-full bg-honey" />
            <p className="mt-4 text-sm leading-7 text-warm/75">
              برای آگاهی از محصول تازه و پیشنهادهای ویژه، ایمیل خود را وارد کنید.
            </p>
            <div className="mt-4 [&_button]:bg-honey [&_button]:text-forest-deep [&_button:hover]:bg-honey-light [&_form>div]:border-transparent">
              <NewsletterForm compact />
            </div>
          </div>
        </div>

        <div className="relative border-t border-warm/15 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-right">
            <p className="text-xs text-warm/70 sm:text-sm">{footerNote}</p>
            <ul className="flex items-center gap-5 text-xs text-warm/70 sm:text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors duration-200 hover:text-honey">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
