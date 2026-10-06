const heroImage = 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=2000&auto=format&fit=crop&q=80'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern villa at blue hour"
          className="h-full w-full object-cover animate-scale-in"
          fetchPriority="high"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-navy-dark/30 to-navy-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 mb-6 opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s forwards' }}
          >
            <span className="h-px w-8 bg-champagne" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
              Premium Real Estate
            </span>
            <span className="h-px w-8 bg-champagne" />
          </div>

          {/* Headline */}
          <h1
            className="text-hero text-white text-shadow-luxe opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s forwards' }}
          >
            Discover Exceptional
            <br />
            Homes &amp; Investments
          </h1>

          {/* Description */}
          <p
            className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s forwards' }}
          >
            Premium properties in prime locations. Find your dream home
            or the perfect investment with confidence.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.8s forwards' }}
          >
            <a href="/properties" className="btn-gold">
              Explore Properties
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: 'fadeIn 1s ease 1.2s forwards' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
