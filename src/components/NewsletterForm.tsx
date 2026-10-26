import { useState, type FormEvent } from 'react'
import { CheckIcon } from './Icons'

type NewsletterFormProps = {
  compact?: boolean
  className?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Status = { type: 'success' | 'error'; message: string } | null

/**
 * Frontend-only newsletter form: validates the address and shows a message.
 * Nothing is sent anywhere (no backend, no external service).
 */
export default function NewsletterForm({ compact = false, className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()

    if (!value) {
      setStatus({ type: 'error', message: 'لطفاً ایمیل خود را وارد کنید.' })
      return
    }

    if (!EMAIL_PATTERN.test(value)) {
      setStatus({ type: 'error', message: 'ایمیل وارد شده معتبر نیست.' })
      return
    }

    setStatus({ type: 'success', message: 'عضویت شما ثبت شد. از همراهی شما سپاسگزاریم.' })
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`w-full ${className}`}>
      <div
        className={`flex flex-col gap-2 rounded-full border border-line bg-warm p-1.5 sm:flex-row sm:items-center ${
          compact ? '' : 'shadow-soft'
        }`}
      >
        <label htmlFor={compact ? 'footer-newsletter-email' : 'newsletter-email'} className="sr-only">
          نشانی ایمیل
        </label>
        <input
          id={compact ? 'footer-newsletter-email' : 'newsletter-email'}
          type="email"
          inputMode="email"
          dir="ltr"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (status) setStatus(null)
          }}
          placeholder="ایمیل خود را وارد کنید"
          aria-invalid={status?.type === 'error'}
          className={`min-w-0 flex-1 rounded-full bg-transparent px-4 py-2.5 text-left text-sm text-ink placeholder:text-ink/45 focus:outline-none ${
            compact ? '' : 'sm:px-5'
          }`}
        />
        <button type="submit" className={`btn-primary ${compact ? 'px-5 py-2.5 text-sm' : ''}`}>
          عضویت
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-2 min-h-5 text-xs font-semibold sm:text-sm ${
          status?.type === 'error' ? 'text-honey-dark' : 'text-forest-soft'
        }`}
      >
        {status ? (
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4" />
            {status.message}
          </span>
        ) : (
          ''
        )}
      </p>
    </form>
  )
}
