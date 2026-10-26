export type Benefit = {
  id: string
  title: string
  text: string
  icon: 'tag' | 'truck' | 'shield' | 'payment' | 'quality'
}

export const benefits: Benefit[] = [
  { id: 'quality', title: 'تضمین کیفیت', text: 'تست و کنترل کیفی محصول', icon: 'quality' },
  { id: 'payment', title: 'پرداخت مطمئن', text: 'از درگاه‌های معتبر بانکی', icon: 'payment' },
  { id: 'origin', title: 'تضمین اصالت و سلامت', text: 'تضمین اصالت و سلامت محصول', icon: 'shield' },
  { id: 'shipping', title: 'ارسال سریع', text: 'به سراسر ایران', icon: 'truck' },
  { id: 'price', title: 'قیمت مناسب', text: 'بهترین قیمت تضمینی', icon: 'tag' },
]

export type Product = {
  id: string
  name: string
  category: string
  weight: string
  price: number
  rating: number
  image: string
  alt: string
  badge?: string
}

/** قیمت‌ها نمونه هستند؛ برای فروش واقعی این آرایه را ویرایش کنید. */
export const products: Product[] = [
  {
    id: 'mountain',
    name: 'عسل کوهستانی',
    category: 'عسل طبیعی کوهستان',
    weight: '۱ کیلوگرم',
    price: 2950000,
    rating: 4.9,
    image: '/images/prod-kuhistani.jpg',
    alt: 'عسل کوهستانی در کنار شان عسل و برگ‌ها',
    badge: 'پرفروش',
  },
  {
    id: 'gon',
    name: 'عسل گون',
    category: 'عسل طبیعی مزارع کوهستانی',
    weight: '۹۰۰ گرم',
    price: 1890000,
    rating: 4.7,
    image: '/images/prod-gon.jpg',
    alt: 'شیشه کوچک عسل گون روی میز چوبی',
  },
  {
    id: 'acacia',
    name: 'عسل اقاقیا',
    category: 'عسل طبیعی و خالص',
    weight: '۹۰۰ گرم',
    price: 2450000,
    rating: 5,
    image: '/images/prod-acacia.jpg',
    alt: 'شیشه عسل اقاقیا در فضای باز',
  },
  {
    id: 'chandgiah',
    name: 'عسل چندگیاه',
    category: 'عسل طبیعی چندگیاه',
    weight: '۱ کیلوگرم',
    price: 2990000,
    rating: 4.8,
    image: '/images/prod-chandgiah.jpg',
    alt: 'شیشه عسل چندگیاه با گل تزئینی',
  },
]

export type Testimonial = {
  id: string
  name: string
  initials: string
  text: string
  rating: number
}

/** نظرات نمونه (نمایشی) هستند و بازخورد واقعی مشتریان محسوب نمی‌شوند. */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'محبوبه رضایی',
    initials: 'م.ر',
    text: 'عسل واقعاً طبیعی و خوشمزه بود. حتماً دوباره سفارش می‌دم.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'علی محمدی',
    initials: 'ع.م',
    text: 'بسته‌بندی عالی و ارسال سریع، ممنون از عسلستان.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'سارا احمدی',
    initials: 'س.ا',
    text: 'کیفیت عسل عالی بود و طعمش خیلی طبیعی و دلچسبه.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'نیلوفر کریمی',
    initials: 'ن.ک',
    text: 'رنگ و عطر عسل طبیعی بود و با چای خیلی هم‌نشین شد.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'حسین موسوی',
    initials: 'ح.م',
    text: 'پک هدیه را برای دوستم گرفتم؛ ظاهر شیکی داشت.',
    rating: 4,
  },
  {
    id: 't6',
    name: 'مریم صادقی',
    initials: 'م.ص',
    text: 'پاسخگویی خوب بود و سفارشم سریع ارسال شد.',
    rating: 5,
  },
]

export type BrandFeature = {
  id: string
  title: string
  icon: 'shield' | 'leaf' | 'honeycomb' | 'quality'
}

export const brandFeatures: BrandFeature[] = [
  { id: 'natural', title: 'محصولات کاملاً طبیعی', icon: 'quality' },
  { id: 'additive', title: 'بدون افزودنی و نگهدارنده', icon: 'leaf' },
  { id: 'local', title: 'حمایت از زنبورداران محلی', icon: 'honeycomb' },
  { id: 'origin', title: 'تضمین کیفیت و اصالت', icon: 'shield' },
]
