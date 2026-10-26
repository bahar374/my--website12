import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sandbox preview only: the dev server is reached through the Base44 preview proxy,
// which sends `Host: <port>-<sandbox domain>` (the sandbox id rotates), while the
// browser origin is `https://3000-<public host suffix>`. Vite rejects hosts that are
// not on its allowlist, so the sandbox host domain is added to the allowlist with the
// framework's leading-dot (subdomain) wildcard. Gated on BASE44_PREVIEW_MODE === '1';
// when the flag is unset or has any other value the original defaults are kept.
const isPreview = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    ...(isPreview && sandboxHostDomain ? { allowedHosts: [`.${sandboxHostDomain}`] } : {}),
  },
})
