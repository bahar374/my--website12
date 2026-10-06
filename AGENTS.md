# Horizon Properties — Base44 Dev Environment

## Stack
- **Frontend:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS 3.4 (custom navy/champagne/ivory palette)
- **Routing:** React Router DOM 6
- **Fonts:** Manrope (Google Fonts)
- **Images:** Unsplash (direct `images.unsplash.com` URLs)

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Web entry: `http://localhost:3000` (Vite dev server on 5173, mapped to 3000)
- Live reload via Vite HMR + polling watch (bind mount)

## Architecture
- `src/data/` — property, team, and services data (typed, ready for DB connection)
- `src/components/` — reusable UI: Header, Footer, PropertyCard, Carousel, ImageGallery, ScrollReveal, Logo
- `src/sections/` — homepage sections: Hero, About, FeaturedProperties, Services, WhyChoose, Team, CTA
- `src/pages/` — route pages: Home, Properties (filter/search), PropertyDetail (gallery/agent), About, Services, Team, Contact, NotFound

## Key Design Decisions
- Header is transparent over hero, transitions to white/blur on scroll (only on home page)
- Carousel supports mouse drag + touch swipe + arrow buttons
- Property data structured with slugs for detail page routing
- All images lazy-loaded except hero (fetchPriority="high")
- ScrollReveal uses IntersectionObserver for fade-up animations
- No heavy animation libraries — CSS transitions + custom hooks only
