import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type CartLine = {
  id: string
  name: string
  price: number
  qty: number
}

type AddPayload = {
  id: string
  name: string
  price: number
}

type CartToastState = {
  id: number
  message: string
}

type CartValue = {
  lines: CartLine[]
  count: number
  total: number
  toast: CartToastState | null
  add: (product: AddPayload) => void
  dismissToast: () => void
}

const CartContext = createContext<CartValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [toast, setToast] = useState<CartToastState | null>(null)

  const add = useCallback((product: AddPayload) => {
    setLines((prev) => {
      const existing = prev.find((line) => line.id === product.id)
      if (existing) {
        return prev.map((line) => (line.id === product.id ? { ...line, qty: line.qty + 1 } : line))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setToast({ id: Date.now(), message: `«${product.name}» به سبد خرید اضافه شد` })
  }, [])

  const dismissToast = useCallback(() => setToast(null), [])

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const value = useMemo<CartValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.qty, 0)
    const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0)
    return { lines, count, total, toast, add, dismissToast }
  }, [lines, toast, add, dismissToast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider')
  }
  return context
}
