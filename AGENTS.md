# عسلستان (Asalestan) — Base44 Dev Environment

Static front-end shop homepage for the fictional honey brand "عسلستان". Persian, RTL, no backend.

## Stack
- **Frontend:** Vite 5 + React 18 + TypeScript (no router — the site is a single page)
- **Styling:** Tailwind CSS 3.4 with the brand palette in `tailwind.config.js`
  (`forest #104C36`, `forest-deep #073D2C`, `honey #F5AC18`, `cream #FFF9ED`, `warm #FFFDF7`,
  `mint #F2F7F1`, `ink #243E32`, `line #E9DFC9`)
- **Font:** Vazirmatn, self-hosted from `public/fonts` (no external font/CDN request at runtime)
- **Icons/decoration:** inline SVG in `src/components/Icons.tsx` and `src/components/Decor.tsx`; no icon library
- **Images:** local files in `public/images` (stock photos downloaded at build time, not hot-linked)

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Web entry: `http://localhost:3000` (Vite dev server on 5173 inside the container, mapped to 3000)
- The compose file binds the repo into `node:22-alpine`, installs from the lockfile and runs `vite dev`,
  so source edits are live (HMR).
- `web` is the only service. No database, no API, no secrets — `.base44/environment.json` has an empty
  `secrets` list.

## Architecture
- `src/pages/Home.tsx` — composes the page; every block below the header lives in `src/sections/`
  (`Hero`, `BenefitsBar`, `Categories`, `BestSellers`, `StoryBanner`, `GiftBanner`, `BrandStory`,
  `Testimonials`, `NewsletterSection`)
- `src/components/` — `Header`, `Footer`, `ProductCard`, `NewsletterForm`, `CartToast`, `Logo`,
  `ScrollReveal`, `Icons` (line icons), `Decor` (cartoon bee, hive, forest silhouettes, flowers)
- `src/data/` — editable content: `products.ts` (benefits, categories, products, testimonials, brand
  features) and `site.ts` (nav, contact, socials, footer copy)
- `src/context/CartContext.tsx` — local UI-only cart: `add()` increments quantities and shows a toast.
  Nothing is persisted or sent anywhere.

## Sandbox overrides (only active with `BASE44_PREVIEW_MODE=1`)
- `vite.config.ts` adds `.${BASE44_SANDBOX_HOST_DOMAIN}` to Vite's `allowedHosts` (the sandbox proxy
  forwards `Host: <port>-<sandbox id>.<domain>`). With the flag unset, the default allowlist is used.
- Compose passes `BASE44_PREVIEW_MODE`, `BASE44_PUBLIC_HOST_SUFFIX`, `BASE44_SANDBOX_HOST_DOMAIN` and
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` through to the dev server.

## Verifying
- `docker compose -f docker-compose.base44.yml exec -T web npm run typecheck` — TypeScript check.
- `... exec -T web npm run build` — production build check.
- Content anchors used by the in-page CTAs: `#categories`, `#products`, `#brand-story`, `#newsletter`,
  `#contact`. If a section id is renamed, update the CTAs and `src/data/site.ts` with it.
- Placeholder content that must be replaced before any real launch: prices/weights in
  `src/data/products.ts`, the testimonials (sample text, labelled as such on the page), and the contact
  details in `src/data/site.ts` (labelled as sample in the footer).
