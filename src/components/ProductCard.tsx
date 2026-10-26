import { useState } from 'react'
import { CartIcon, CheckIcon, HeartIcon, StarIcon } from './Icons'
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
    <article className="card-surface group flex h-full flex-col overflow-hidden p-3 hover:-translate-y-1 hover:border-honey/60 hover:shadow-card sm:p-4">
      <div className="relative overflow-hidden rounded-card bg-cream">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
        />

        {product.badge ? (
          <span className="absolute right-3 top-3 rounded-full bg-honey px-3 py-1 text-[0.7rem] font-bold text-forest-deep shadow-honey">
            {product.badge}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => setLiked((value) => !value)}
          aria-pressed={liked}
          aria-label={liked ? `حذف ${product.name} از علاقه‌مندی‌ها` : `افزودن ${product.name} به علاقه‌مندی‌ها`}
          className={`absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-warm/90 transition-colors duration-200 ${
            liked ? 'text-honey' : 'text-forest/60 hover:text-honey'
          }`}
        >
          <HeartIcon filled={liked} className="h-[1.15rem] w-[1.15rem]" />
        </button>
      </div>

      <div className="mt-3 flex flex-1 flex-col sm:mt-4">
        <h3 className="text-base font-bold sm:text-lg">{product.name}</h3>
        <p className="mt-1 text-xs text-ink/60 sm:text-sm">{product.category}</p>
        <p className="mt-2 text-xs leading-6 text-ink/80 sm:text-sm">{product.description}</p>

        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink/70 sm:text-sm">
          <CheckIcon className="h-4 w-4 shrink-0 text-forest-soft" />
          وزن: {product.weight}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="flex items-center gap-0.5 text-honey" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= Math.round(product.rating)} className="h-4 w-4" />
            ))}
          </span>
          <span className="text-xs font-semibold text-ink/70">{ratingLabel}</span>
          <span className="sr-only">امتیاز {ratingLabel} از ۵</span>
        </div>

        <p className="mt-3 text-base font-extrabold text-forest sm:text-lg">
          {priceLabel} <span className="text-xs font-semibold sm:text-sm">تومان</span>
        </p>

        <button
          type="button"
          onClick={() => add({ id: product.id, name: product.name, price: product.price })}
          className="btn-primary mt-3 w-full sm:mt-4"
        >
          <CartIcon className="h-[1.15rem] w-[1.15rem]" />
          افزودن به سبد خرید
        </button>
      </div>
    </article>
  )
}
