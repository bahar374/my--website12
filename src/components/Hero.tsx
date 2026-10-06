import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const VIDEO_SRC = '/videos/hero-scrub.mp4'
const FALLBACK_IMAGE = '/images/hero-villa.jpg'

/**
 * Height of the scroll track that drives the video timeline.
 * The visible hero (the sticky child below) is always exactly 100vh —
 * this extra height is purely the distance the user scrolls to move the
 * video from its first frame to its last. Tune here to shorten/lengthen the scrub.
 */
const SCROLL_TRACK = 'h-[250vh] md:h-[300vh]'

/** One frame at the video's 24fps — used to land on a real frame at the very end. */
const FRAME = 1 / 24

/** Half a frame. Anything smaller than this isn't worth issuing a seek for. */
const MIN_DELTA = 1 / 48

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [videoReady, setVideoReady] = useState(false)

  const maxTimeRef = useRef(0) // newest seekable frame (duration − one frame)
  const targetRef = useRef(0) // where scroll says the video should be (seconds)

  // Pull the clip fully local and hand it straight to the element. A network-backed
  // <video> stalls once it seeks past its buffered range, which makes the scrub feel
  // detached; a Blob-backed one seeks within a single frame.
  // If any of this fails, nothing happens: the fallback image below stays visible.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let objectUrl: string | null = null
    let cancelled = false

    fetch(VIDEO_SRC)
      .then((res) => {
        if (!res.ok) throw new Error(`Video request failed (${res.status})`)
        return res.blob()
      })
      .then((blob) => {
        if (cancelled) return
        objectUrl = URL.createObjectURL(blob)
        video.src = objectUrl
      })
      .catch(() => {})

    return () => {
      cancelled = true
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [])

  // Scroll position -> target time. This only ever *seeks*; the video is never played.
  const readScroll = useCallback(() => {
    const section = sectionRef.current
    if (!section || maxTimeRef.current <= 0) return

    const rect = section.getBoundingClientRect()
    const scrubDistance = rect.height - window.innerHeight
    if (scrubDistance <= 0) return

    const progress = Math.min(1, Math.max(0, -rect.top / scrubDistance))
    targetRef.current = progress * maxTimeRef.current
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', readScroll, { passive: true })
    window.addEventListener('resize', readScroll)
    readScroll()
    return () => {
      window.removeEventListener('scroll', readScroll)
      window.removeEventListener('resize', readScroll)
    }
  }, [readScroll])

  // A single rAF loop keeps the video's currentTime pinned to the scroll target.
  // It only ever issues a seek once the previous one has finished: re-targeting
  // mid-seek makes browsers thrash and drop frames instead of tracking the scroll.
  useEffect(() => {
    let frame = 0
    const step = () => {
      const video = videoRef.current
      if (video && maxTimeRef.current > 0 && video.readyState >= 2 && !video.seeking) {
        const target = targetRef.current
        if (Math.abs(video.currentTime - target) > MIN_DELTA) {
          video.currentTime = target
        }
      }
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Jump straight to the frame the current scroll position calls for (used on load).
  const syncToScroll = () => {
    readScroll()
    const video = videoRef.current
    if (video && video.readyState >= 2 && !video.seeking) {
      video.currentTime = targetRef.current
    }
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (!video) return
    const duration = Number.isFinite(video.duration) ? video.duration : 0
    maxTimeRef.current = Math.max(0, duration - FRAME)
    video.pause()
    syncToScroll()
  }

  return (
    <section ref={sectionRef} className={`relative w-full ${SCROLL_TRACK}`}>
      {/* Sticky viewport: the hero the user sees, pinned at exactly 100vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Fallback image sits underneath, so a missing or broken video can never
            leave the hero blank. */}
        <img
          src={FALLBACK_IMAGE}
          alt="Modern luxury villa at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Scroll-scrubbed video: muted, no autoplay, no loop, never play()ed.
            It only fades in once a frame is actually available. */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onLoadedMetadata={handleLoadedMetadata}
          onLoadedData={() => {
            syncToScroll()
            setVideoReady(true)
          }}
          onError={() => setVideoReady(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-lux ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Overlay gradients keep the copy legible over any frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 to-transparent" />

        {/* Content — bottom-left quadrant */}
        <div className="absolute inset-0 flex items-end">
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-12 hidden md:flex flex-col items-center gap-2">
          <span className="text-ivory/50 text-[0.7rem] uppercase tracking-[0.2em] [writing-mode:vertical-rl]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-champagne to-transparent"
          />
        </div>
      </div>
    </section>
  )
}
