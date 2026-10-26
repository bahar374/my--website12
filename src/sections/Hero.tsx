import { useEffect, useRef } from 'react'
import { CartIcon, LeafIcon } from '../components/Icons'

const motes = [
  { left: '12%', top: '30%', delay: '0s' },
  { left: '44%', top: '52%', delay: '-3s' },
  { left: '63%', top: '22%', delay: '-5s' },
  { left: '30%', top: '70%', delay: '-7s' },
  { left: '55%', top: '68%', delay: '-2s' },
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ticking = false

    const update = () => {
      ticking = false
      const hero = heroRef.current
      const bg = bgRef.current
      if (!hero || !bg) return
      const y = Math.min(window.scrollY, hero.offsetHeight)
      bg.style.transform = `translate3d(0, ${y * 0.1}px, 0)`
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full overflow-hidden bg-[#cfe0e8] aspect-[1672/704] max-[820px]:aspect-auto max-[820px]:h-[max(640px,168vw)]"
    >
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-x-0 -top-[3%] bottom-0 bg-[url('/images/hero-landscape.jpg')] bg-cover bg-center will-change-transform max-[820px]:bg-[position:30%_0] max-[820px]:bg-[length:auto_70%]"
      />

      {/* cropped foreground pieces, mobile only */}
      <div
        aria-hidden="true"
        className="absolute bottom-[6%] left-[-4%] z-[3] hidden aspect-[640/330] w-[60%] bg-[url('/images/hero-landscape.jpg')] bg-no-repeat bg-[length:261%_auto] bg-[position:0_98%] [mask-image:linear-gradient(90deg,#000_80%,transparent)] [-webkit-mask-image:linear-gradient(90deg,#000_80%,transparent)] max-[820px]:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-3%] top-[34%] z-[3] hidden aspect-[560/520] w-[46%] bg-[url('/images/hero-landscape.jpg')] bg-no-repeat bg-[length:298.5%_auto] bg-[position:100%_0] [mask-image:linear-gradient(270deg,#000_82%,transparent)] [-webkit-mask-image:linear-gradient(270deg,#000_82%,transparent)] max-[820px]:block"
      />

      {motes.map((mote) => (
        <i
          key={`${mote.left}-${mote.top}`}
          aria-hidden="true"
          style={{ left: mote.left, top: mote.top, animationDelay: mote.delay }}
          className="absolute z-[2] hidden h-1.5 w-1.5 animate-mote rounded-full bg-[radial-gradient(#fff6c8,#f5ac18_70%,transparent)] opacity-70 lg:block"
        />
      ))}

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
        viewBox="0 0 1456 613"
        preserveAspectRatio="none"
      >
        <path
          d="M752 250C722 258 692 252 688 226C684 198 722 198 720 224C716 252 650 288 570 304C480 322 428 342 388 352"
          className="animate-trail fill-none stroke-white stroke-[2.4] [stroke-dasharray:7_9] [stroke-linecap:round] opacity-90 max-[820px]:hidden"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="absolute left-[7.2%] top-[10%] z-[5] flex w-[36%] flex-col items-start max-[820px]:inset-x-0 max-[820px]:top-[5%] max-[820px]:w-auto max-[820px]:items-center max-[820px]:px-[6%] max-[820px]:text-center">
        <p className="flex items-center gap-2 text-[clamp(12px,1.3vw,19px)] font-medium text-honey">
          <svg viewBox="0 0 24 24" fill="#F5AC18" className="h-[1.4em] w-[1.4em]" aria-hidden="true">
            <ellipse cx="7" cy="10" rx="5" ry="3.4" transform="rotate(-30 7 10)" opacity=".75" />
            <ellipse cx="17" cy="10" rx="5" ry="3.4" transform="rotate(30 17 10)" opacity=".75" />
            <ellipse cx="12" cy="15" rx="3" ry="5" />
          </svg>
          از دل طبیعت، خالص و ناب
        </p>

        <h1 className="my-[0.3em] whitespace-nowrap text-[clamp(30px,5.1vw,78px)] font-black leading-[1.25] text-forest [text-shadow:0_2px_14px_rgba(255,249,237,0.55)] max-[820px]:whitespace-normal max-[820px]:text-[clamp(34px,11vw,52px)]">
          شیرینیِ اصل طبیعت
        </h1>

        <div className="flex gap-[1.4vw] max-[820px]:flex-wrap max-[820px]:justify-center max-[820px]:gap-2.5">
          <a
            href="#brand-story"
            className="inline-flex items-center gap-[0.6em] rounded-full border-[1.5px] border-forest bg-warm/25 px-[2.1em] py-[0.95em] text-[clamp(12px,1.15vw,17px)] font-bold text-forest backdrop-blur-[2px] transition-transform duration-300 ease-soft hover:-translate-y-0.5 max-[820px]:px-[1.5em] max-[820px]:py-[0.9em] max-[820px]:text-[13px]"
          >
            <LeafIcon className="h-[1.3em] w-[1.3em]" />
            داستان ما
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-[0.6em] rounded-full border-[1.5px] border-forest bg-forest px-[2.1em] py-[0.95em] text-[clamp(12px,1.15vw,17px)] font-bold text-warm shadow-[0_8px_20px_rgba(16,76,54,0.25)] transition-transform duration-300 ease-soft hover:-translate-y-0.5 max-[820px]:px-[1.5em] max-[820px]:py-[0.9em] max-[820px]:text-[13px]"
          >
            <CartIcon className="h-[1.3em] w-[1.3em]" />
            مشاهده محصولات
          </a>
        </div>
      </div>

      <div className="absolute left-[50.69%] top-[11.1%] z-[4] w-[14.7%] animate-hero-fly max-[820px]:left-auto max-[820px]:right-[6%] max-[820px]:top-[30%] max-[820px]:w-[30%]">
        <img
          src="/images/bee-flying.png"
          alt="زنبور عسلستان"
          className="block w-full origin-[45%_55%] animate-wing-flap drop-shadow-[0_8px_10px_rgba(80,50,0,0.18)]"
        />
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1672 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -bottom-px z-[6] h-[14%] w-full max-[820px]:h-[9%]"
      >
        <path
          d="M0 28C170 66 360 92 620 88C830 84 960 40 1190 54C1400 66 1560 28 1672 36V101H0Z"
          fill="#FFF9ED"
        />
        <path
          d="M0 28C170 66 360 92 620 88C830 84 960 40 1190 54C1400 66 1560 28 1672 36"
          fill="none"
          stroke="#F5AC18"
          strokeWidth="2.2"
          opacity="0.55"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  )
}
