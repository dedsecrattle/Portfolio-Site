# Portfolio — Prabhat Kumar

Neobrutalist, tech-savvy personal portfolio. Single-page, static, light and
dark themes, with a terminal-flavoured hero (boot intro, typewriter, glitch).
Paper background, heavy ink borders, hard offset shadows, flat colour blocks.

**Live:** [prabhatk.tech](https://prabhatk.tech)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com) v4 + [shadcn/ui](https://ui.shadcn.com)
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light toggle
- [Phosphor Icons](https://phosphoricons.com) (bold weight) — UI icons
- [Simple Icons](https://simpleicons.org) via `react-icons` — tech brand logos
- Space Grotesk / JetBrains Mono via `next/font`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Design tokens

Colours, hard shadows (`shadow-nb*`) and the lift/press interactions
(`nb-hover`, `nb-press`) are defined in [`src/app/globals.css`](src/app/globals.css).
Section accents: lime (brand), blue, pink, yellow, purple, orange.

## Link previews (Open Graph)

The share image is a static file, [`src/app/opengraph-image.png`](src/app/opengraph-image.png)
(1200×630, alt text in `opengraph-image.alt.txt`). It is static on purpose: the host
serves files by extension, and an extension-less generated image is sent without an
image content type, which makes WhatsApp and Facebook drop the preview. If you change
the name or tagline, replace the PNG. After deploying, re-scrape at
https://developers.facebook.com/tools/debug/ to clear Facebook's and WhatsApp's cache.

## Editing content

All content lives in one file — [`src/lib/data.ts`](src/lib/data.ts). Update the
profile, socials, skills, projects, experience, education, and awards there; the
sections read from it, so no component edits are needed.

## Structure

```
src/
  app/            layout, page composition, global styles
  lib/data.ts     single source of truth for all content
  components/
    sections/     hero, about, skills, projects, experience, education, awards, contact
    ui/           neobrutalist primitives (button, card, badge)
    *.tsx         nav, theme toggle, typewriter, glitch, boot screen, cursor
```

## Deploy

Push to `main` and import at [vercel.com/new](https://vercel.com/new) — zero
config. The build is fully static and prerendered.
