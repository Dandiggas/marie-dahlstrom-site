# Marie Dahlstrøm — Official Site

Cinematic single-page artist site for **Marie Dahlstrøm**, built around the self-titled album **MARIE** (2026, JFH Collective).

Static site — no build step, no framework. Just HTML, CSS, JS and assets. Opens in any browser, deploys anywhere.

## Design

The album is a duotone — warm **stone-grey** front cover, deep **forest-green** back. The site blends both: green carries the structure, warm stone owns the "About" section, gold ties them together, film grain sits over everything. The two most prominent images are Marie's real work (the album cover and her moving portrait); the ambient green smoke is generative texture only.

- **Type:** high-contrast serif (Didot family) + humanist sans, system stacks (no web-font loads)
- **Motion:** scroll-reveal (IntersectionObserver), hero parallax, floating cover, looping portrait video
- **Accessibility:** respects `prefers-reduced-motion`, semantic landmarks, alt text

## Structure

```
index.html      # markup
styles.css      # all styling
main.js         # nav, scroll reveals, hero parallax
assets/
  marie-cover.jpg     # MARIE album cover (hero)
  portrait.mp4        # moving B&W portrait (About) — from her brand GIF, 336KB
  backdrop.jpg        # green portrait-muslin — the theme surface (fixed, behind everything)
  gold-dust.jpg       # album-panel texture
  covers/             # back-catalogue artwork
```

## Run locally

```bash
# any static server, e.g.
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser (the portrait video autoplays muted).

## Deploy

**Vercel** — framework preset **Other**, no build command, output dir `.`:

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

Also works as-is on Netlify, Cloudflare Pages, or GitHub Pages.

### Domain plan

- `www.mariedahlstrom.com` → this site
- `shop.mariedahlstrom.com` → existing Squarespace store (keeps checkout/merch untouched)

## To finish

- [ ] Album **release date** (currently "2026")
- [ ] Real **tour dates** (or wire to Bandsintown)
- [ ] Confirm streaming/pre-save links resolve to the release
- [ ] Optional: additional press photography for the hero

## Credits

Album *MARIE* — mixed by Joshua Pleeter, mastered by Peter Beckmann (TechnologyWorks). Photography Lennon Gregory. Artwork Seán Grannum & Marie Dahlstrøm. Site build for JFH Collective.
