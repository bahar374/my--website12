# Horizon Properties — Base44 Dev Environment

## Stack
- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3 (custom palette: navy/ivory/champagne/driftwood)
- Framer Motion for animations
- React Router 6 for multi-page navigation
- lucide-react for icons

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
App runs on host port 3000 (mapped to Vite's 5173 inside the container).

## Key setup notes
- Dependencies install on container startup via `npm install` (not baked into image)
- Source is bind-mounted; Vite HMR with polling enabled for live reload
- All images are stored locally in `public/images/` — external image CDNs (Unsplash) are not reachable from the preview browser
- No external secrets required; no database

## Hero scroll-scrub video
- `public/videos/hero-scrub.mp4` — 1600×900, 24fps, ~10s, **all-intra** (every frame is a
  keyframe). All-intra is what makes seeking frame-accurate; re-encode a replacement with
  `ffmpeg -g 1 -keyint_min 1 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart`.
- The Hero pins at 100vh inside a taller scroll track (`SCROLL_TRACK` in `Hero.tsx`);
  scroll position maps linearly onto the video timeline. The video is never played — only
  seeked — so it reads as "scroll drives the camera", not "the video plays".
- Seeks are only ever issued when `!video.seeking`. Re-targeting mid-seek makes browsers
  thrash and drop frames instead of tracking the scroll.
- The clip is fetched into a Blob and served from an object URL: a network-backed
  `<video>` stalls as soon as it seeks past its buffered range.
- `public/images/hero-villa.jpg` is always painted underneath the video, so a missing or
  broken video can never leave the hero blank.

## Project structure
- `src/components/` — Header, Hero, About, FeaturedProperties, CTABar, Footer, ScrollProgress, ScrollToTop
- `src/pages/` — Home, Properties, PropertyDetail, AboutPage, Contact, Services, Team
- `src/data/properties.ts` — property data (6 listings with galleries)

## Pages
- `/` — Home (hero, about, featured properties carousel, CTA)
- `/properties` — listing grid with search/filter/sort
- `/properties/:id` — property detail with gallery and sidebar
- `/about` — company story, values, stats
- `/services` — service offerings grid
- `/team` — team member cards
- `/contact` — contact form with info

## Design system
- Colors: Navy `#0F172A`, Ivory `#FDFCFB`, Champagne `#BFA17A`, Driftwood `#64748B`
- Fonts: Plus Jakarta Sans (display), Inter (body) — loaded from Google Fonts
- Tailwind config defines custom colors, fonts, and transition timing
