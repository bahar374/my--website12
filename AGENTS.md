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
