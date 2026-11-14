# Faralokun Vital Herbs — React website

Frontend-only React + Vite + Tailwind CSS site (no backend, database, auth or payment gateway).
Customers pick PHARA Dagboru (bottles), PHARA Pile Plus (packs), or both, see the total, and
order through WhatsApp (`https://wa.me/2348030403521`) with a prefilled message.
WhatsApp only prepares the message; the customer must press send.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```
Requires Node 18+. Fonts (DM Serif Display, DM Sans) load from Google Fonts, so the first view needs internet.

## Where to edit things
| What | File |
|---|---|
| Prices, units, company name, WhatsApp number | `src/data/products.js` |
| Page sections (in order) | `src/sections/*.jsx`, assembled in `src/App.jsx` |
| Reusable pieces (buttons, pricing card, order builder…) | `src/components/*.jsx` |
| Colours, typography, spacing, animations | `src/index.css` |
| Images | `src/assets/` (favicon in `public/favicon/`) |

## Notes
- The approved design's CSS lives in `src/index.css` so the look is identical to the design reference.
  Tailwind is installed and its utilities are available, but its base reset (preflight) is switched off
  in `tailwind.config.js` so it can't change the approved styling.
- Icons come from `lucide-react`. A mobile hamburger menu was added (the design hid the links on small screens).
- Scroll-reveal animation: `src/hooks/useScrollReveal.js`. Animations are disabled for visitors with reduced-motion enabled.
- Health wording follows the packaging only; no cure or treatment claims. Keep it that way when editing copy.

## Deploy
Netlify / Vercel / Cloudflare Pages: connect the GitHub repo, build command `npm run build`, output folder `dist`.
Or run `npm run build` and drag the `dist` folder onto https://app.netlify.com/drop.
Images are bundled with the site, so no Cloudinary or other image host is needed.
