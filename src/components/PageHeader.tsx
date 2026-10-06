import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

type PageHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  image?: string
  crumbs?: Crumb[]
}

export default function PageHeader({ eyebrow, title, description, image, crumbs = [] }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50" />
        </>
      )}
      {!image && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_140%_at_15%_-10%,rgba(197,160,89,0.16),transparent_55%)]"
        />
      )}

      <div className="container relative">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-label text-white/45">
              {crumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.to ? (
                    <Link to={crumb.to} className="transition-colors duration-300 hover:text-champagne">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-champagne">{crumb.label}</span>
                  )}
                  {index < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
            {eyebrow}
          </p>
        )}

        <h1 className="mt-5 max-w-3xl text-[2.15rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/65">{description}</p>
        )}
      </div>
    </section>
  )
}
