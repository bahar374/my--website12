export type NavLink = {
  label: string
  href: string
}

export const brand = {
  name: 'عسلستان',
  tagline: 'طعم ناب طبیعت',
  description:
    'عسلستان مجموعه‌ای کوچک و مستقل از عسل طبیعی است؛ ما محصولات را از زنبورداران محلی تهیه می‌کنیم و با بسته‌بندی مناسب به دست شما می‌رسانیم.',
}

export const navLinks: NavLink[] = [
  { label: 'خانه', href: '#top' },
  { label: 'محصولات', href: '#products' },
  { label: 'فروشگاه', href: '#products' },
  { label: 'داستان ما', href: '#brand-story' },
  { label: 'مجله عسل', href: '#newsletter' },
]

export const contact = {
  phoneLabel: '۰۲۱-۸۸۷۷۵۴۶۷',
  phoneHref: 'tel:+982188775467',
  emailLabel: 'info@aselestan.com',
  emailHref: 'mailto:info@aselestan.com',
  addressLabel: 'تهران، خیابان طبیعت، پلاک ۱۲',
  note: 'این اطلاعات نمونه است و برای انتشار باید با اطلاعات واقعی برند جایگزین شود.',
}

export type SocialLink = {
  label: string
  href: string
  icon: 'instagram' | 'telegram' | 'whatsapp' | 'youtube'
}

export const socials: SocialLink[] = [
  { label: 'اینستاگرام', href: '#', icon: 'instagram' },
  { label: 'تلگرام', href: '#', icon: 'telegram' },
  { label: 'واتساپ', href: '#', icon: 'whatsapp' },
  { label: 'یوتیوب', href: '#', icon: 'youtube' },
]

export const quickLinks: NavLink[] = [
  { label: 'صفحه اصلی', href: '#top' },
  { label: 'محصولات', href: '#products' },
  { label: 'مجله عسل', href: '#newsletter' },
  { label: 'درباره ما', href: '#brand-story' },
  { label: 'تماس با ما', href: '#contact' },
]

export const legalLinks: NavLink[] = [
  { label: 'حریم خصوصی', href: '#privacy' },
  { label: 'قوانین و مقررات', href: '#terms' },
]

export const footerNote = 'تمامی حقوق مادی و معنوی این سایت متعلق به عسلستان است.'

export const footerQuote = 'طبیعت همیشه با ماست...'
