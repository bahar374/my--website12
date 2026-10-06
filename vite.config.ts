import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// The app is served through the Base44 preview proxy, so the dev server must
// accept the proxied host/origin and bind to all interfaces.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: true,
    watch: {
      // Bind mounts in Docker often miss native fs events — poll instead.
      usePolling: true,
      interval: 300,
    },
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: true,
  },
})
