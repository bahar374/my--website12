import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image with parallax slow-zoom */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0"
      >
        <motion.img
          src="/images/hero-villa.jpg"
          alt="Modern luxury villa at dusk"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-navy-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 to-transparent" />

      {/* Content — bottom-left quadrant */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-end"
      >
        <div className="max-w-container mx-auto w-full px-6 lg:px-10 pb-20 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-champagne" />
              <span className="text-champagne text-[0.8125rem] font-semibold uppercase tracking-[0.2em]">
                Luxury Real Estate
              </span>
            </div>
            <h1 className="text-ivory font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6">
              Discover Exceptional<br />Homes & Investments
            </h1>
            <p className="text-ivory/80 text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-10">
              Premium properties in prime locations. Find your dream home or the perfect investment with confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 bg-ivory text-navy-900 px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:bg-champagne hover:gap-3"
              >
                Explore Properties
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-ivory/40 text-ivory px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 ease-lux hover:border-ivory hover:bg-ivory/5"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 right-8 lg:right-12 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-ivory/50 text-[0.7rem] uppercase tracking-[0.2em] [writing-mode:vertical-rl]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-champagne to-transparent"
        />
      </motion.div>
    </section>
  )
}
