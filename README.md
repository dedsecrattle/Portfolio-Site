# Portfolio — Prabhat Kumar

Minimalist, tech-savvy personal portfolio. Single-page, static, dark-first with
a terminal-flavoured hero (boot intro, typewriter, glitch, CRT scanlines).

**Live:** [prabhatk.tech](https://prabhatk.tech)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com) v4 + [shadcn/ui](https://ui.shadcn.com)
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light toggle
- [lucide-react](https://lucide.dev) — icons
- Geist Sans / Geist Mono via `next/font`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All content lives in one file — [`src/lib/data.ts`](src/lib/data.ts). Update the
profile, socials, skills, projects, experience, education, and stats there; the
sections read from it, so no component edits are needed.

## Structure

```
src/
  app/            layout, page composition, global styles
  lib/data.ts     single source of truth for all content
  components/
    sections/     hero, about, skills, projects, experience, education, stats, contact
    ui/           shadcn primitives (button, card, badge)
    *.tsx         nav, theme toggle, typewriter, glitch, boot screen, brand icons
```

## Deploy

Push to `main` and import at [vercel.com/new](https://vercel.com/new) — zero
config. The build is fully static and prerendered.
