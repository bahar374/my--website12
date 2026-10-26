export type Benefit = {
  id: string
  title: string
  text: string
  icon: 'tag' | 'truck' | 'shield' | 'quality'
}

export const benefits: Benefit[] = [
  { id: 'price', title: 'قیمت مناسب', text: 'بهترین کیفیت با قیمت منصفانه', icon: 'tag' },
  { id: 'shipping', title: 'ارسال سریع', text: 'ارسال سفارش‌ها در سراسر ایران', icon: 'truck' },
  { id: 'origin', title: 'تضمین اصالت محصول', text: 'توجه به اصالت و کیفیت محصولات', icon: 'shield' },
  { id: 'packaging', title: 'کیفیت محصول', text: 'بسته‌بندی مناسب و اطلاعات شفاف', icon: 'quality' },
]

export type Category = {
  id: string
  name: string
  image: string
  alt: string
}

export const categories: Category[] = [
  { id: 'gon', name: 'عسل گون', image: '/images/cat-gon.jpg', alt: 'شیشه عسل گون روی سطح چوبی' },
  { id: 'konar', name: 'عسل کنار', image: '/images/cat-konar.jpg', alt: 'دو شیشه عسل کنار در طبیعت' },
  { id: 'mountain', name: 'عسل کوهستانی', image: '/images/cat-kuhistani.jpg', alt: 'شیشه‌های عسل کوهستانی با برگ‌های سبز' },
  { id: 'chandgiah', name: 'عسل چندگیاه', image: '/images/cat-chandgiah.jpg', alt: 'شیشه‌های عسل چندگیاه روی سینی چوبی' },
  { id: 'acacia', name: 'عسل اقاقیا', image: '/images/cat-acacia.jpg', alt: 'شیشه عسل اقاقیا در فضای گرم خانه' },
  { id: 'gift', name: 'پک‌های هدیه', image: '/images/cat-gift.jpg', alt: 'پک هدیه عسل با چند شیشه و عسل‌خوری' },
]

export type Product = {
  id: string
  name: string
  category: string
  description: string
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
    id: 'chandgiah',
    name: 'عسل چندگیاه',
    category: 'عسل چند گیاه کوهی',
    description: 'عطر گیاهان کوهی با طعمی گرم و ماندگار',
    weight: '۱ کیلوگرم',
    price: 2990000,
    rating: 4.8,
    image: '/images/prod-chandgiah.jpg',
    alt: 'شیشه عسل چندگیاه با گل تزئینی',
    badge: 'پرفروش',
  },
  {
    id: 'gon',
    name: 'عسل گون',
    category: 'عسل مزارع کوهستانی',
    description: 'طعمی ملایم و روشن، مناسب مصرف روزانه',
    weight: '۹۰۰ گرم',
    price: 1890000,
    rating: 4.7,
    image: '/images/prod-gon.jpg',
    alt: 'شیشه کوچک عسل گون روی میز چوبی',
  },
  {
    id: 'acacia',
    name: 'عسل اقاقیا',
    category: 'عسل تک‌گل اقاقیا',
    description: 'شفاف و لطیف با شیرینی آرام',
    weight: '۹۰۰ گرم',
    price: 2450000,
    rating: 5,
    image: '/images/prod-acacia.jpg',
    alt: 'شیشه عسل اقاقیا در فضای باز',
  },
  {
    id: 'mountain',
    name: 'عسل کوهستانی',
    category: 'عسل چراگاه‌های بلند',
    description: 'برداشتشده از مراتع بلند و خنک',
    weight: '۱ کیلوگرم',
    price: 2950000,
    rating: 4.9,
    image: '/images/prod-kuhistani.jpg',
    alt: 'عسل کوهستانی در کنار شان عسل و برگ‌ها',
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
    text: 'بسته‌بندی مرتب بود و سفارش به‌خوبی به دستم رسید.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'علی محمدی',
    initials: 'ع.م',
    text: 'طعم عسل برای من دلنشین بود و تجربه خرید خوبی داشتم.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'سارا احمدی',
    initials: 'س.ا',
    text: 'تنوع محصولات باعث شد انتخاب راحت‌تری داشته باشم.',
    rating: 4,
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
  { id: 'quality', title: 'توجه به کیفیت محصول', icon: 'quality' },
  { id: 'transparent', title: 'اطلاعات شفاف', icon: 'leaf' },
  { id: 'local', title: 'حمایت از زنبورداران محلی', icon: 'honeycomb' },
  { id: 'packaging', title: 'بسته‌بندی مناسب', icon: 'shield' },
]
