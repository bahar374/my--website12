import { useFavorites } from '@/context/FavoritesContext'
import { HeartIcon } from './Icons'

type FavoriteButtonProps = {
  propertyId: string
  className?: string
  tone?: 'light' | 'dark'
}

export default function FavoriteButton({ propertyId, className = '', tone = 'light' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(propertyId)

  const base =
    tone === 'light'
      ? active
        ? 'border-champagne bg-champagne text-navy'
        : 'border-white/50 bg-white/85 text-navy hover:bg-white'
      : active
        ? 'border-champagne bg-champagne text-navy'
        : 'border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy'

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(propertyId)}
      aria-pressed={active}
      aria-label={active ? 'Remove from saved properties' : 'Save this property'}
      title={active ? 'Saved' : 'Save property'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-all duration-300 ease-premium ${base} ${className}`.trim()}
    >
      <HeartIcon className="h-4 w-4" fill={active ? 'currentColor' : 'none'} />
    </button>
  )
}
