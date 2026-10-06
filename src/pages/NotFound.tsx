import Button from '@/components/Button'
import { ArrowRightIcon } from '@/components/Icons'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-950 pb-20 pt-36">
      <div className="container text-center">
        <p className="eyebrow justify-center">
          <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
          Error 404
        </p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          This page could not be found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-white/65">
          The page you were looking for may have moved — or the property is no longer available.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button to="/" variant="white" size="lg" icon={<ArrowRightIcon className="h-4 w-4" />}>
            Back to Home
          </Button>
          <Button to="/properties" variant="outlineLight" size="lg">
            Browse Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
