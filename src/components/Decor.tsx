type DecorProps = {
  className?: string
}

/** Cartoon bee used as a small decorative accent. */
export function Bee({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true" focusable="false">
      <ellipse cx="33" cy="14" rx="10" ry="6" fill="#FFFDF7" stroke="#104C36" strokeWidth="1.1" opacity="0.95" transform="rotate(-16 33 14)" />
      <ellipse cx="45" cy="16" rx="9" ry="5.4" fill="#FFFDF7" stroke="#104C36" strokeWidth="1.1" opacity="0.95" transform="rotate(18 45 16)" />
      <path d="M13 21c-1.6-3.2-3.9-4.8-6.6-5.2" stroke="#104C36" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M19 20.4c.2-3.4-.6-5.6-2.4-7.4" stroke="#104C36" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="14.5" cy="28" r="7.6" fill="#F5AC18" stroke="#104C36" strokeWidth="1.6" />
      <ellipse cx="38" cy="28" rx="15.5" ry="11.5" fill="#F5AC18" stroke="#104C36" strokeWidth="1.6" />
      <path d="M31 17.6c-2.4 6.2-2.4 14.6 0 20.8" stroke="#104C36" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M43 18.6c-2.1 5.8-2.1 13.2 0 19" stroke="#104C36" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <circle cx="11.8" cy="26.4" r="1.9" fill="#104C36" />
      <circle cx="17.6" cy="26.4" r="1.9" fill="#104C36" />
      <path d="M12 31.6c1.8 1.5 3.7 1.5 5.4 0" stroke="#104C36" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/** Dashed flight path that pairs with the cartoon bee. */
export function BeeFlight({ className = '', animate = true }: DecorProps & { animate?: boolean }) {
  return (
    <svg viewBox="0 0 220 60" className={className} aria-hidden="true" focusable="false">
      <path
        d="M4 52C42 40 72 14 122 14s70 16 94-4"
        fill="none"
        stroke="#F5AC18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="5 8"
        className={animate ? 'animate-dash' : undefined}
      />
    </svg>
  )
}

/** Wooden beehive sketch for banner/footer corners. */
export function WoodenHive({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 120 142" className={className} aria-hidden="true" focusable="false">
      <path d="M20 40h80l-9-15H29z" fill="#8A5A2B" />
      <rect x="23" y="40" width="74" height="70" rx="9" fill="#A9702F" />
      <path d="M26 61h68M26 82h68" stroke="#7A4E24" strokeWidth="3.2" strokeLinecap="round" />
      <rect x="48" y="88" width="24" height="12" rx="6" fill="#5A3719" />
      <path d="M15 110h90l7 11H8z" fill="#8A5A2B" />
      <circle cx="60" cy="30" r="4" fill="#F5AC18" />
    </svg>
  )
}

/** Pine-forest silhouette strip. */
export function ForestSilhouette({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 1200 120" className={className} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        d="M0 120V92l22-30 22 30 14-18 22 30 24-46 24 34 22-22 22 30 24-44 24 36 22-20 22 30 24-46 24 34 22-22 22 30 24-44 24 36 22-20 22 30 24-46 24 34 22-22 22 30 24-44 24 36 22-20 22 30 24-46 24 34 22-22 22 30 24-44 24 36 22-20 22 30 24-46 24 34 22-22 22 30 24-44 24 36 22-20 22 30 24-46 24 34 22-22 22 30 16-24V120Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Small wildflower cluster. */
export function FlowerCluster({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 140 120" className={className} aria-hidden="true" focusable="false">
      <path d="M70 118V60M70 92c-14-6-22-16-24-30M70 78c14-4 22-14 24-26" stroke="#2F7A57" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M46 64c-10-2-16-8-17-16 10-4 17 0 20 8" fill="#3E8F68" opacity="0.9" />
      <path d="M94 52c10-3 15-9 15-17-10-3-17 2-19 10" fill="#3E8F68" opacity="0.9" />
      <g fill="#FFFDF7">
        <ellipse cx="70" cy="34" rx="7" ry="12" />
        <ellipse cx="70" cy="34" rx="12" ry="7" />
        <ellipse cx="70" cy="34" rx="7" ry="12" transform="rotate(45 70 34)" />
        <ellipse cx="70" cy="34" rx="12" ry="7" transform="rotate(45 70 34)" />
      </g>
      <circle cx="70" cy="34" r="6" fill="#F5AC18" />
      <g fill="#FBC85C">
        <ellipse cx="34" cy="76" rx="3.4" ry="6" />
        <ellipse cx="34" cy="76" rx="6" ry="3.4" />
        <circle cx="34" cy="76" r="2.6" fill="#FFFDF7" />
      </g>
    </svg>
  )
}

/** Leaf sprig accent. */
export function LeafSprig({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true" focusable="false">
      <path d="M4 52C36 50 74 38 116 12" stroke="#2F7A57" strokeWidth="2" strokeLinecap="round" fill="none" />
      <g fill="#3E8F68">
        <path d="M34 45c-9-5-13-12-12-20 9 0 15 5 16 14Z" />
        <path d="M58 35c-4-10-1-18 6-23 4 9 2 17-4 23Z" />
        <path d="M84 24c-1-10 4-17 12-20 2 9-2 16-9 20Z" />
      </g>
    </svg>
  )
}

/** Honeycomb cluster of hexagons. */
export function HoneycombCluster({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 100 88" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M26 2 44 12v20L26 42 8 32V12Z" />
        <path d="M56 14 74 24v20L56 54 38 44V24Z" />
        <path d="M26 44 44 54v20L26 84 8 74V54Z" />
      </g>
    </svg>
  )
}

/** Honey drop. */
export function HoneyDrop({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 32 44" className={className} aria-hidden="true" focusable="false">
      <path d="M16 2c7 9 12 15.6 12 22a12 12 0 0 1-24 0C4 17.6 9 11 16 2Z" fill="currentColor" />
      <path d="M11 24c0 4 2.4 6.6 6 7.2" stroke="#FFFDF7" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  )
}
