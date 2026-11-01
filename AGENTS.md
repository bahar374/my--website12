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
  (`Hero`, `BenefitsBar`, `BestSellers`, `StoryBanner`, `GiftBanner`, `BrandStory`,
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
- Content anchors used by the in-page CTAs: `#top`, `#benefits`, `#products`, `#brand-story`,
  `#testimonials`, `#newsletter`, `#contact`. If a section id is renamed, update the CTAs and
  `src/data/site.ts` with it.
- Placeholder content that must be replaced before any real launch: prices/weights/products in
  `src/data/products.ts`, the testimonials there (sample text), and the contact details in
  `src/data/site.ts`. Both files flag this in comments; the design keeps the page itself clean.

## Layout quirks
- The hero *is* the clip: `public/videos/hero-scroll.mp4` (1080×608), with the copy pinned left and a
  cream wave masking the section bottom. The section uses `aspect-[16/9]`, the clip's own ratio, so no
  part of the frame is cropped and the still frame and the film always line up. The poster is
  `public/images/hero-poster.jpg`, a frame exported from the clip itself — never swap in a differently
  framed still here, or the poster and the first video frame visibly jump.
- The clip already contains the animated bee, so the old `bee-flying.png` overlay and its dashed flight
  trail were removed from the hero (`hero-landscape.jpg`, `bee-flying.png` and the `hero-fly` /
  `wing-flap` / `trail` keyframes are still used elsewhere / kept in the config).
- Below 820px the copy centers and the hero becomes tall (`max(640px,168vw)`), so the landscape clip
  center-crops its sides there.
- The hero clip is **scroll-scrubbed**: `Hero.tsx` maps scroll progress through the section
  (`scrollY / hero height`, clamped 0–1) onto `video.currentTime`, so the clip is never playing — it
  zooms exactly as far as the visitor scrolls and reverses on the way up. `prefers-reduced-motion`
  leaves it on the first frame. The source clip was 1080×1920 with baked-in black bars; it was
  cropped and re-encoded with
  `docker run --rm -v $PWD/public/videos:/v linuxserver/ffmpeg -i hero.mp4 -vf crop=1080:608:0:656 -an …`
  (short GOP for snappy seeking) — re-crop with ffmpeg if the clip is ever replaced.
- Sections switch to their desktop composition at custom breakpoints (`min-[820px]` for the benefits
  row, `min-[900px]` for the 4-up product grid, 3-column story and 4-column footer), matching the
  1024px reference mockup on tablets.
- The footer column order is mirrored on purpose (brand left, contact right with the bee/quote
  artwork) to match the reference mockup.
