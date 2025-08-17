import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: false },
      strategies: 'generateSW',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,mp4}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: { cacheName: 'pages' },
          },
          {
            urlPattern: ({ request }) => request.destination === 'image' || request.destination === 'video',
            handler: 'CacheFirst',
            options: { cacheName: 'media', expiration: { maxEntries: 200 } },
          },
          {
            urlPattern: /^https:\/\/(fonts)\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts' },
          },
        ],
      },
      manifest: {
        name: 'Meine React PWA',
        short_name: 'ReactPWA',
        description: 'Eine kleine React Progressive Web App',
        theme_color: '#ffffff',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/cat-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/cat-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/cat-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: '/cat.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
        ]
      }
    })
  ],
  server: {
    port: 5173,
    host: true,
  }
})
