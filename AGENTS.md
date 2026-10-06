# AGENTS.md

## Project

Horizon Properties — a marketing site for a luxury real estate agency.
Vite + React 18 + TypeScript + Tailwind CSS, client-side routing with react-router.
There is **no backend, database or authentication**; all content is static.

## Running it

```bash
docker compose -f docker-compose.base44.yml up -d   # http://localhost:3000
docker compose -f docker-compose.base44.yml logs -f web
```

The `web` service runs `npm ci && npm run dev` from the bind-mounted source in
`node_modules` (a named volume) so host/container architectures never clash.
`npm ci` needs `package-lock.json` — regenerate it with
`docker run --rm -v "$PWD:/app" -w /app node:22 npm install --package-lock-only`
whenever dependencies change, and commit the result.

## Non-obvious setup notes

- **Vite is configured for the preview proxy**: `server.host: true`,
  `port: 3000`, `strictPort: true`, `allowedHosts: true`. The preview reaches
  the dev server through a rotating external hostname, so an allowlist would
  break it. Don't narrow `allowedHosts`.
- **File watching uses polling** (`server.watch.usePolling`) because bind mounts
  in Docker often miss native filesystem events. Expect ~300ms reload latency.
- **Images are remote Unsplash CDN URLs**, not local assets. They are centralised
  in `src/lib/images.ts` and in each property's `images` array in
  `src/data/properties.ts`. They load in the user's browser, so the sandbox
  itself needs no outbound network at runtime.
- **No secrets are required.** Local infrastructure is limited to the single
  `node:22` container; there is no `.env` to populate.

## Verifying a change

- `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` should be `200`.
- The dev server logs live compilation on every edit; a production build served
  on 3000 means the dev wiring has regressed.
- Quick type check: `docker compose -f docker-compose.base44.yml exec web npm run typecheck`.

## Content model

Property, service and team records live in `src/data/` as typed arrays
(`properties.ts`, `services.ts`, `team.ts`). `Property` is deliberately shaped
like a database row (`id`, `slug`, pricing as a number, `images: string[]`) so
the data can later be swapped for an API/CMS without touching the components.

Favourites are persisted in `localStorage` via `src/context/FavoritesContext.tsx`.
Forms (contact, newsletter, schedule-a-viewing) resolve client-side; there is no
mail transport wired up yet.
