export const formatPrice = (value: number): string => {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000
    const rounded = Math.round(millions * 100) / 100
    return `$${rounded} Million`
  }
  return `$${value.toLocaleString('en-US')}`
}

export const formatCompactPrice = (value: number): string => {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 2)}M`
  if (value >= 1_000) return `$${Math.round(value / 1_000)}K`
  return `$${value.toLocaleString('en-US')}`
}

export const formatNumber = (value: number): string => value.toLocaleString('en-US')

export const propertyHref = (slug: string) => `/properties/${slug}`
