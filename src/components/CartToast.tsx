import { CheckIcon, CloseIcon } from './Icons'
import { useCart } from '../context/CartContext'

/** Short confirmation shown after a product is added to the local cart. */
export default function CartToast() {
  const { toast, dismissToast } = useCart()

  if (!toast) return null

  return (
    <div
      key={toast.id}
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-4 left-4 z-[60] animate-rise-in rounded-full border border-line bg-forest px-4 py-3 text-sm font-semibold text-warm shadow-card sm:left-auto sm:right-6 sm:max-w-sm"
    >
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-honey text-forest-deep">
          <CheckIcon className="h-4 w-4" />
        </span>
        <span className="flex-1">{toast.message}</span>
        <button
          type="button"
          onClick={dismissToast}
          aria-label="بستن پیام"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-warm/70 transition-colors hover:text-warm"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
