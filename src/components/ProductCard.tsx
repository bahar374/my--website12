import { useState } from 'react'
import { CartIcon, HeartIcon, StarIcon } from './Icons'
import { useCart } from '../context/CartContext'
import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart()
  const [liked, setLiked] = useState(false)

  const ratingLabel = product.rating.toLocaleString('fa-IR', { maximumFractionDigits: 1 })
  const priceLabel = product.price.toLocaleString('fa-IR')

  return (
    <article className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-white p-3 shadow-[0_16px_34px_-28px_rgba(16,76,54,0.45)] transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-honey/60 hover:shadow-card sm:p-4">
      <div className="relative overflow-hidden rounded-[1rem] bg-cream">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
        />

        {product.badge ? (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-honey px-2.5 py-1 text-[0.66rem] font-bold text-forest-deep shadow-[0_8px_16px_-10px_rgba(217,143,10,0.8)] sm:text-[0.7rem]">
            {product.badge}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => setLiked((value) => !value)}
          aria-pressed={liked}
          aria-label={liked ? `حذف ${product.name} از علاقه‌مندی‌ها` : `افزودن ${product.name} به علاقه‌مندی‌ها`}
          className={`absolute left-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm/85 transition-colors duration-200 ${
            liked ? 'text-honey' : 'text-forest/55 hover:text-honey'
          }`}
        >
          <HeartIcon filled={liked} className="h-[1.05rem] w-[1.05rem]" />
        </button>
      </div>

      <div className="mt-3 flex flex-1 flex-col items-center text-center">
        <h3 className="text-base font-extrabold text-forest sm:text-[1.05rem]">{product.name}</h3>
        <p className="mt-1 text-[0.72rem] text-ink/60 sm:text-xs">{product.category}</p>

        <div className="mt-2 flex items-center justify-center gap-0.5 text-honey" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= Math.round(product.rating)} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          ))}
        </div>
        <span className="sr-only">امتیاز {ratingLabel} از ۵</span>

        <p className="mt-2 text-[0.95rem] font-extrabold text-forest sm:text-base">
          {priceLabel} <span className="text-[0.7rem] font-semibold sm:text-xs">تومان</span>
        </p>

        <div className="mt-auto w-full pt-3">
          <button
            type="button"
            onClick={() => add({ id: product.id, name: product.name, price: product.price })}
            className="btn-primary w-full gap-2 px-3 py-2.5 text-[0.78rem] sm:text-[0.85rem]"
          >
            <CartIcon className="h-4 w-4" />
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </article>
  )
}
