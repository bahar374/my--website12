import { useEffect, useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import AgentCard from '@/components/AgentCard'
import Button from '@/components/Button'
import FavoriteButton from '@/components/FavoriteButton'
import ImageGallery from '@/components/ImageGallery'
import PropertyCard from '@/components/PropertyCard'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import {
  AreaIcon,
  ArrowRightIcon,
  BathIcon,
  BedIcon,
  CalendarIcon,
  CheckIcon,
  CloseIcon,
  MapPinIcon,
} from '@/components/Icons'
import { getPropertyBySlug, getSimilarProperties } from '@/data/properties'
import { getAgent } from '@/data/team'
import { formatNumber, formatPrice } from '@/lib/format'
import NotFound from './NotFound'

type ViewingModalProps = {
  intent: string
  propertyTitle: string
  onClose: () => void
}

function ViewingModal({ intent, propertyTitle, onClose }: ViewingModalProps) {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-navy-950/70 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={intent}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2.5xl bg-white p-6 shadow-lift sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-6 bg-champagne/50" />
              {intent}
            </p>
            <h2 className="mt-3 font-display text-xl font-bold text-navy">{propertyTitle}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        {sent ? (
          <div className="mt-8 text-center">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-champagne/20 text-champagne">
              <CheckIcon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold text-navy">Request received</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
              Thank you — one of our advisors will confirm your appointment personally within one business
              day.
            </p>
            <Button onClick={onClose} className="mt-7">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="viewing-name" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                  Full name
                </label>
                <input id="viewing-name" required type="text" className="field mt-2" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="viewing-email" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                  Email
                </label>
                <input id="viewing-email" required type="email" className="field mt-2" placeholder="jane@email.com" />
              </div>
              <div>
                <label htmlFor="viewing-phone" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                  Phone
                </label>
                <input id="viewing-phone" type="tel" className="field mt-2" placeholder="(555) 000-0000" />
              </div>
              <div>
                <label htmlFor="viewing-date" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                  Preferred date
                </label>
                <input id="viewing-date" type="date" className="field mt-2" />
              </div>
            </div>
            <div>
              <label htmlFor="viewing-message" className="text-[0.7rem] font-semibold uppercase tracking-label text-navy/60">
                Message
              </label>
              <textarea
                id="viewing-message"
                rows={3}
                className="field mt-2 resize-none"
                placeholder="Tell us anything that would help us prepare."
              />
            </div>
            <Button type="submit" fullWidth size="lg" icon={<ArrowRightIcon className="h-4 w-4" />}>
              Send request
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function PropertyDetail() {
  const { slug = '' } = useParams()
  const property = getPropertyBySlug(slug)
  const [modalIntent, setModalIntent] = useState<string | null>(null)

  if (!property) return <NotFound />

  const agent = getAgent(property.agentId)
  const similar = getSimilarProperties(property, 3)

  const facts = [
    { icon: BedIcon, label: 'Bedrooms', value: formatNumber(property.beds) },
    { icon: BathIcon, label: 'Bathrooms', value: formatNumber(property.baths) },
    { icon: AreaIcon, label: 'Interior', value: `${formatNumber(property.sqft)} sqft` },
    { icon: CalendarIcon, label: 'Year built', value: String(property.year) },
  ]

  return (
    <>
      <div className="bg-navy-950 pb-14 pt-32 sm:pt-36 lg:pt-40">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-label text-white/45">
              <li>
                <Link to="/" className="transition-colors duration-300 hover:text-champagne">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/properties" className="transition-colors duration-300 hover:text-champagne">
                  Properties
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-champagne">{property.title}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex rounded-full border border-champagne/40 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-label text-champagne">
                {property.type}
              </span>
              <h1 className="mt-5 max-w-2xl text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[3rem]">
                {property.title}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <MapPinIcon className="h-4 w-4 text-champagne" />
                {property.city}, {property.region}, {property.country}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-display text-2xl font-bold text-champagne sm:text-3xl">
                {formatPrice(property.price)}
              </p>
              <FavoriteButton propertyId={property.id} />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-stone pb-20 pt-10 sm:pt-12">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <ImageGallery images={property.images} title={property.title} />

              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold text-navy">Overview</h2>
                <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-ink-soft">
                  {property.description}
                </p>
                <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-ink-soft">
                  Offered with the full discretion of the Horizon private office. Arrange a private viewing
                  to experience the property in person.
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-navy/10 bg-white p-5 text-center shadow-soft"
                  >
                    <fact.icon className="mx-auto h-5 w-5 text-champagne" />
                    <p className="mt-3 font-display text-xl font-bold text-navy">{fact.value}</p>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-label text-ink-soft/70">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-xl font-bold text-navy">Key Features</h2>
                  <ul className="mt-5 space-y-3">
                    {property.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-xl font-bold text-navy">Amenities</h2>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {property.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-start gap-3 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2.5xl border border-navy/10 bg-white p-6 shadow-soft">
                  <dl className="space-y-3.5 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-ink-soft">Property type</dt>
                      <dd className="font-medium text-navy">{property.type}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-ink-soft">Bedrooms</dt>
                      <dd className="font-medium text-navy">{property.beds}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-ink-soft">Bathrooms</dt>
                      <dd className="font-medium text-navy">{property.baths}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-ink-soft">Interior</dt>
                      <dd className="font-medium text-navy">{formatNumber(property.sqft)} sqft</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-ink-soft">Plot</dt>
                      <dd className="font-medium text-navy">{property.lot}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-navy/10 pt-3.5">
                      <dt className="font-medium text-navy">Price</dt>
                      <dd className="font-display text-lg font-bold text-champagne">
                        {formatPrice(property.price)}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 space-y-3">
                    <Button
                      onClick={() => setModalIntent('Schedule a viewing')}
                      fullWidth
                      size="lg"
                      icon={<CalendarIcon className="h-4 w-4" />}
                    >
                      Schedule a Viewing
                    </Button>
                    <Button
                      onClick={() => setModalIntent('Contact the agent')}
                      fullWidth
                      variant="outline"
                      icon={<ArrowRightIcon className="h-4 w-4" />}
                    >
                      Contact Agent
                    </Button>
                  </div>
                </div>

                {agent && <AgentCard agent={agent} className="mt-6" />}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="You may also like"
                title="Similar Properties"
              />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((item, index) => (
                <Reveal key={item.id} delay={index * 70}>
                  <PropertyCard property={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile floating CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-bold text-navy">{property.title}</p>
            <p className="text-sm font-semibold text-champagne">{formatPrice(property.price)}</p>
          </div>
          <Button
            onClick={() => setModalIntent('Schedule a viewing')}
            size="sm"
            icon={<CalendarIcon className="h-3.5 w-3.5" />}
            className="shrink-0"
          >
            Viewing
          </Button>
        </div>
      </div>
      <div aria-hidden="true" className="h-20 lg:hidden" />

      {modalIntent && (
        <ViewingModal
          intent={modalIntent}
          propertyTitle={property.title}
          onClose={() => setModalIntent(null)}
        />
      )}
    </>
  )
}
