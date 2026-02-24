# Handover - 2026-02-24

## What We Worked On
- Rebrand `belajarexporimpor` app from "Belajar Ekspor Impor" → "incoterms.id" / "Simulator Incoterms 2020"
- Added `incoterms.id` cross-promotion links to `gpindo-co-id` (IncotermsGuide + Footer)
- Added `incoterms.id` cross-promotion links to `gpindo-com` (KnowledgeHub + Footer + ui-strings EN/ID)
- Renamed GitHub repo `belajarexporimpor` → `incoterms-id` and set to private
- Added 2 Instagram links to incoterms.id website footer
- Diagnosed and explained DNS issue (Hostinger parked page showing instead of Vercel)

---

## What Got Done

### incoterms-id repo (belajarexporimpor)
- **`src/i18n/translations.js`**: `common.appName` → `'incoterms.id'` (both langs), `home.title` → `'Simulator Incoterms 2020'` / `'Incoterms 2020 Simulator'`
- **`src/components/layout/Layout.jsx`**: Added 2 Instagram links + Instagram icon from lucide-react to footer:
  - `@incoterms.id` → `https://www.instagram.com/incoterms.id/`
  - `@gatewayprimaindonusa` → `https://www.instagram.com/gatewayprimaindonusa/`
- **`.gitignore`**: Added `.vercel/` directory
- Commits: `d5fb1b2` (rebrand), `31c530f` (.gitignore), `80ba145` (Instagram footer)
- Deployed to Vercel: `vercel --prod --yes` from project dir
- GitHub repo renamed: `belajarexporimpor` → `incoterms-id` via `gh repo rename`
- GitHub repo made private: `gh repo edit --visibility private --accept-visibility-change-consequences`
- Git remote URL updated to: `https://github.com/giangeralcus/incoterms-id.git`

### gpindo-co-id repo
- **`src/components/guides/IncotermsGuide.jsx`**: Added sky-blue CTA banner after comparison table linking to incoterms.id with "Buka Simulator ↗" button
- **`src/components/common/Layout/Footer.jsx`**: Added `{ text: "Incoterms Simulator ↗", href: "https://incoterms.id", external: true }` to Resources links; updated render to use `<a target="_blank">` when `link.external === true`
- Commit: `3e3fa13` — pushed to `master`

### gpindo-com repo
- **`src/content/knowledge-data.js`**: Added `simulatorUrl: "https://incoterms.id"` + `simulatorCta` to `incoterms` topic
- **`src/components/landing/KnowledgeHub.jsx`**: Added conditional simulator link after GPI tip callout (only renders for topics with `simulatorUrl`)
- **`content/en/ui-strings.js`**: Added `{ label: "Incoterms Simulator ↗", href: "https://incoterms.id" }` to `footer.links`
- **`content/id/ui-strings.js`**: Added `{ label: "Simulator Incoterms ↗", href: "https://incoterms.id" }` to `footer.links`
- Commit: `fdf8f29` — pushed to `main`

---

## What Didn't Work (and How We Fixed It)

### gpindo-co-id push rejected
- **Error**: `! [rejected] master -> master (fetch first)` — remote had newer commits
- **Fix**: `git pull --rebase && git push`

### `gh repo edit --yes` flag doesn't exist
- **Error**: Unknown flag `--yes` when making repo private
- **Fix**: Used `--accept-visibility-change-consequences` instead

### incoterms.id showing Hostinger parked page
- **Symptom**: User screenshot showed "Registered at HOSTINGER" parked page
- **Root cause**: DNS propagation delay — Hostinger hPanel already has nameservers set to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`, but `vercel domains inspect` was still seeing `ns1.dns-parking.com` / `ns2.dns-parking.com`
- **Status**: NOT a misconfiguration. Google DNS (8.8.8.8) already returns Vercel nameservers. Resolution: wait for propagation (~1–2 hours from ~13:10 WIB on 2026-02-24)

### Hostinger MCP token expired
- **Error**: All Hostinger MCP calls returned `{"message":"Unauthenticated."}`
- **Root cause**: Token in `C:\Users\giang\.mcp.json` (`hostinger-api.env.API_TOKEN`) returned HTTP 401 when tested directly
- **Fix**: Need to regenerate token from hPanel → Profile → API. Not yet done.

---

## Key Decisions

| Decision | Reason |
|----------|--------|
| Keep `localStorage` key as `belajar-ekspor-impor-progress` | Changing it would wipe all existing users' progress data |
| Use `external: true` flag in gpindo-co-id footer links | Existing footer used `<Link to>` for all internal links; needed conditional to render `<a target="_blank">` for external URLs |
| Instagram footer in incoterms.id: plain `<a>` not `<NavLink>` | External links — correct approach |
| incoterms.id GitHub repo set to private | User request — the learning app code should not be public |

---

## Lessons & Gotchas

- **Vercel domain inspect vs. actual DNS**: `vercel domains inspect` checks DNS from its own resolvers which may lag behind. Cross-verify with `nslookup <domain> 8.8.8.8` for ground truth.
- **Hostinger parking NS**: `ns1.dns-parking.com` / `ns2.dns-parking.com` are Hostinger's default parking nameservers — they appear when a domain is freshly registered or NS propagation hasn't completed yet.
- **After `gh repo rename`**: Must manually run `git remote set-url origin https://github.com/giangeralcus/incoterms-id.git` — GitHub does NOT update local remotes automatically.
- **gpindo-com footer** already auto-handled external links via `link.href.startsWith("http")` pattern — only needed data change. gpindo-co-id needed code change.

---

## Files Touched

| File | Repo | Change |
|------|------|--------|
| `src/i18n/translations.js` | incoterms-id | Rebrand: appName + home.title |
| `src/components/layout/Layout.jsx` | incoterms-id | Add 2 Instagram links to footer |
| `.gitignore` | incoterms-id | Add `.vercel/` |
| `src/components/guides/IncotermsGuide.jsx` | gpindo-co-id | Add incoterms.id CTA banner |
| `src/components/common/Layout/Footer.jsx` | gpindo-co-id | Add Incoterms Simulator link + external flag support |
| `src/content/knowledge-data.js` | gpindo-com | Add simulatorUrl/simulatorCta to incoterms topic |
| `src/components/landing/KnowledgeHub.jsx` | gpindo-com | Render simulator link conditionally |
| `content/en/ui-strings.js` | gpindo-com | Add Incoterms Simulator to footer.links |
| `content/id/ui-strings.js` | gpindo-com | Add Simulator Incoterms to footer.links |

---

## Next Steps

1. **Wait for DNS propagation** — Check `incoterms.id` in browser ~2 hours after ~13:10 WIB. Should resolve to Vercel and show the app.
2. **Verify Instagram links live** — After DNS resolves, confirm both `@incoterms.id` and `@gatewayprimaindonusa` links appear in the footer.
3. **Refresh Hostinger MCP token** — Go to hPanel → Profile → API → Generate new token → Update `C:\Users\giang\.mcp.json` → `mcpServers.hostinger-api.env.API_TOKEN`
4. **OG image** (`/public/og-cover.jpg` in incoterms-id) — Still has old `belajarexporimpor.com` watermark/branding. Should be updated to `incoterms.id` branded image.
5. **gpindo-co-id CDN** — After each Hostinger deploy, manually purge CDN from Hostinger panel to avoid blank page from cached HTML.

---

## Open Questions

- Is the `@incoterms.id` Instagram account actually created? The link points to `https://www.instagram.com/incoterms.id/` — if account doesn't exist yet, link will 404.
- Should there be a `www.incoterms.id` redirect to `incoterms.id`? Currently only bare domain is configured in Vercel.
- OG cover image for incoterms.id — what should the branded design look like?
