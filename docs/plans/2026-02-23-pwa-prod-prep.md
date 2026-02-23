# PWA + Production Prep Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the app installable as a PWA (works offline, adds to homescreen) and fully production-ready with proper favicon, OG tags, SPA routing config, and SEO basics.

**Architecture:** Use `vite-plugin-pwa` for service worker + manifest generation. Proper favicon (SVG ship icon). OG tags in `index.html`. `vercel.json` for SPA routing. `robots.txt` + `sitemap.xml` for SEO.

**Tech Stack:** vite-plugin-pwa, Vite 7, React 19, Tailwind v4

---

## Context

- Repo: `D:/GitHub Projects/_active/belajarexporimpor`
- Current issues:
  - Favicon is default `vite.svg` (unprofessional)
  - `index.html` has no OG tags (bad social sharing)
  - No `vercel.json` → React Router 404s on direct URL access
  - No `robots.txt` or `sitemap.xml`
  - No PWA manifest or service worker
- Deploy target: Vercel (mentioned in README)

---

### Task 1: Install vite-plugin-pwa

**Files:**
- Modify: `package.json` (auto-updated by npm)
- Modify: `vite.config.js`

**Step 1: Install the package**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm install -D vite-plugin-pwa@^1.0.0 2>&1 | tail -5
```

Expected: Package added to devDependencies

**Step 2: Update vite.config.js**

Replace the entire `vite.config.js` with:

```js
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
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Belajar Ekspor Impor',
        short_name: 'BelajarEI',
        description: 'Interactive Incoterms 2020 & Export-Import Simulator - Belajar freight forwarding Indonesia',
        theme_color: '#0ea5e9',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache' },
          },
        ],
      },
    }),
  ],
})
```

**Step 3: Verify lint**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run lint 2>&1 | tail -10
```

Expected: No errors

**Step 4: Commit**

```bash
git add vite.config.js package.json package-lock.json
git commit -m "feat: add vite-plugin-pwa for PWA support"
```

---

### Task 2: Create favicon and PWA icons

**Files:**
- Create: `public/favicon.svg`
- Create: `public/icons/icon-192.png` (placeholder - see note below)
- Create: `public/icons/icon-512.png` (placeholder - see note below)

**Step 1: Create favicon.svg**

Create `public/favicon.svg` with a ship/container icon:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="#0ea5e9"/>
  <!-- Ship hull -->
  <path d="M6 20h20l-3 5H9L6 20z" fill="white"/>
  <!-- Ship body -->
  <rect x="10" y="13" width="12" height="7" fill="white"/>
  <!-- Containers on ship -->
  <rect x="11" y="14" width="4" height="3" rx="0.5" fill="#0ea5e9"/>
  <rect x="17" y="14" width="4" height="3" rx="0.5" fill="#0ea5e9"/>
  <!-- Smoke stack -->
  <rect x="15" y="9" width="2" height="4" fill="white"/>
  <!-- Waves -->
  <path d="M4 22 Q8 24 12 22 Q16 20 20 22 Q24 24 28 22" stroke="#bae6fd" stroke-width="1.5" fill="none"/>
</svg>
```

**Step 2: Create PNG icons**

For now, create placeholder PNG icons using Node.js (since ImageMagick may not be available):

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor/public" && mkdir -p icons
```

Then create a simple script to generate placeholder PNGs. Run this Node.js snippet:

```bash
node -e "
const { createCanvas } = require('canvas') 2>/dev/null || true;
// If canvas not available, just create empty placeholder files
const fs = require('fs');
// Write minimal valid 1x1 PNG (will be replaced with proper icon)
const png1x1 = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
fs.writeFileSync('public/icons/icon-192.png', png1x1);
fs.writeFileSync('public/icons/icon-512.png', png1x1);
console.log('Placeholder icons created');
"
```

**NOTE for user:** Replace `public/icons/icon-192.png` and `icon-512.png` with real 192x192 and 512x512 PNG images before going live. Use https://favicon.io/favicon-generator/ or any image editor. The SVG favicon will show in browsers; PNGs are for PWA install on mobile.

**Step 3: Update index.html to use new favicon**

In `index.html`, replace:
```html
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```

With:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/icons/icon-192.png" />
```

**Step 4: Verify dev server loads new favicon**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run dev -- --port 5173
```

Check `http://localhost:5173` - browser tab should show ship icon instead of Vite logo.

**Step 5: Commit**

```bash
git add public/favicon.svg public/icons/ index.html
git commit -m "feat: add proper favicon and PWA icons"
```

---

### Task 3: Add OG meta tags to index.html

**Files:**
- Modify: `index.html`

**Step 1: Update the full head section of index.html**

Replace the entire `<head>` section with:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/icons/icon-192.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary SEO -->
  <title>Belajar Ekspor Impor - Incoterms 2020 Simulator</title>
  <meta name="description" content="Simulator interaktif Incoterms 2020 untuk belajar ekspor impor Indonesia. 26 skenario nyata, kalkulator pajak impor, dan tracking progress." />
  <meta name="keywords" content="incoterms 2020, belajar ekspor impor, freight forwarding indonesia, kalkulator bea masuk, FOB CIF DAP DDP" />
  <meta name="author" content="GPIndo" />

  <!-- Open Graph (Facebook, WhatsApp, Telegram) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://belajarexporimpor.com/" />
  <meta property="og:title" content="Belajar Ekspor Impor - Incoterms 2020 Simulator" />
  <meta property="og:description" content="Simulator interaktif untuk belajar Incoterms 2020, ekspor impor Indonesia. 26 skenario nyata, drag & drop, kalkulator pajak." />
  <meta property="og:image" content="https://belajarexporimpor.com/og-cover.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:locale:alternate" content="en_US" />
  <meta property="og:site_name" content="Belajar Ekspor Impor" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Belajar Ekspor Impor - Incoterms 2020 Simulator" />
  <meta name="twitter:description" content="Simulator interaktif Incoterms 2020 untuk freight forwarding Indonesia." />
  <meta name="twitter:image" content="https://belajarexporimpor.com/og-cover.jpg" />

  <!-- PWA -->
  <meta name="theme-color" content="#0ea5e9" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="BelajarEI" />
</head>
```

**NOTE:** Replace `https://belajarexporimpor.com/` with actual domain once purchased. The `og:image` URL needs a real JPEG file at `public/og-cover.jpg` (1200×630px).

**Step 2: Create placeholder OG image**

Create a minimal `public/og-cover.jpg` placeholder (user should replace with branded image):

```bash
# Download a simple placeholder, or just note it as TODO
echo "TODO: Replace with branded 1200x630 JPEG" > public/og-cover.jpg.todo
```

For now, leave `og:image` referencing the URL - it won't work until deployed with a real image.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add OG meta tags and SEO meta for social sharing"
```

---

### Task 4: Create vercel.json for SPA routing

**Files:**
- Create: `vercel.json`

**Context:** React Router uses client-side routing. Without `vercel.json`, refreshing on any route other than `/` returns 404 from Vercel.

**Step 1: Create vercel.json**

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*).js",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

**Step 2: Commit**

```bash
git add vercel.json
git commit -m "feat: add vercel.json for SPA routing and asset caching"
```

---

### Task 5: Create robots.txt and sitemap.xml

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

**Step 1: Create robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://belajarexporimpor.com/sitemap.xml
```

**Step 2: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://belajarexporimpor.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://belajarexporimpor.com/learn</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://belajarexporimpor.com/scenario</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://belajarexporimpor.com/cost-simulator</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://belajarexporimpor.com/progress</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

**NOTE:** Update `https://belajarexporimpor.com` with actual domain after purchase.

**Step 3: Commit**

```bash
git add public/robots.txt public/sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml for SEO"
```

---

### Task 6: Build and verify PWA

**Step 1: Run build**

```bash
cd "D:/GitHub Projects/_active/belajarexporimpor" && npm run build 2>&1
```

Expected: `dist/` created, should see `dist/sw.js` (service worker) and `dist/manifest.webmanifest` generated by vite-plugin-pwa.

**Step 2: Preview production build**

```bash
npm run preview -- --port 5174
```

**Step 3: Verify SPA routing works in preview**

Navigate to `http://localhost:5174/learn` then refresh - should NOT get 404.

Navigate to `http://localhost:5174/scenario` and refresh - should work.

**Step 4: Check PWA in Chrome DevTools**

Open Chrome DevTools > Application > Manifest — should show app name, icons, theme color.
Open Application > Service Workers — should show sw.js registered.

**Step 5: Final push**

```bash
git push origin main
```
