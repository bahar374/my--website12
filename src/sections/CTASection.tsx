import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import { ArrowRightIcon, KeyIcon } from '@/components/Icons'

export default function CTASection() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-24 sm:pt-8">
      <div className="container">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-[#EDF1F5]">
            <div className="flex flex-col items-start gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-14">
              <div className="flex items-start gap-5 sm:gap-6">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-champagne">
                  <KeyIcon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-[1.6rem] font-bold leading-tight tracking-tight text-navy sm:text-[2rem]">
                    Ready to Find Your Perfect Property?
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
                    Let our experts guide you to the right home or investment.
                  </p>
                </div>
              </div>

              <Button
                to="/contact"
                size="lg"
                icon={<ArrowRightIcon className="h-4 w-4" />}
                className="shrink-0"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
