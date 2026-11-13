# Developer Portfolio

A premium, responsive developer portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

The design is a faithful recreation of a clean, minimal portfolio aesthetic: light theme, restrained accent colors, subtle borders, generous whitespace, animated counters, a horizontal tech marquee, scroll reveals, and graceful editorial cards.

> **Everything is content-managed from one file:** [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file and swap the images in `public/` — no component changes required.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 (CSS-first theme) |
| Animation | Framer Motion |
| Icons | Lucide React + inline brand SVGs |

---

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
npm run lint     # lint with oxlint
```

---

## Project structure

```text
src/
  App.tsx                     # page composition + modal state
  data/portfolio.ts           # ← ALL editable content lives here
  components/
    layout/     Navbar, Footer
    sections/   Hero, OpenSource, Moments, FeaturedProjects,
                Experience, Skills, CTA
    ui/         Button, Modal, Reveal, TiltCard, SmartImage,
                BrandIcon, Icon, StatValue
    modals/     ModalContent (Resume / Hire / Connect)
  hooks/        useCounter, useGithub, useActiveSection
  lib/utils.ts
public/
  images/       projects/, moments/, companies/, profile
  icons/        tech-stack icons
  resume.pdf
```

---

## Customizing your portfolio

Open `src/data/portfolio.ts` and edit the sections below. The types are documented inline.

| Key | Controls |
| --- | --- |
| `meta` | Page title, description, canonical URL, OG image |
| `personal` | Name, logo initials, role, location, email, availability, resume URL, social links |
| `nav` | Navigation links (anchors to section ids) |
| `hero` | Badge, headline (with highlight colors), intro, current project, CTAs |
| `stats` | Animated statistics (see note on live GitHub values below) |
| `expertise` | "What I build" pill list with accent tones |
| `openSource` | Repo cards: name, description, tags, language, links |
| `moments` | Editorial achievement cards |
| `featured` | Flagship project + project grid |
| `experience` | Internship / role details + LinkedIn embed |
| `skills` | Tech marquee — add/remove items freely |
| `cta` + `footer` | Contact band and footer copy |

### Live GitHub stats

- Repo cards read `star` / `fork` counts live from the GitHub API.
  Set the `repo` field (e.g. `"owner/repo"`) on each open-source project.
- The **Public repos** stat uses `source: "github"` and `githubUser`.
  It shows `—` until the API resolves, then counts up to the real number.
- Live counts only render when greater than zero, so cards never show a row of zeros.

### Images

Drop your files into `public/images/...` and reference them by absolute path
(`/images/projects/my-project.png`). Missing images degrade gracefully — `SmartImage`
renders a labelled placeholder block instead of a broken-image icon, and tech icons
fall back to a letter badge.

Recommended assets to replace:

```text
public/resume.pdf                     # your resume (a placeholder is included)
public/images/og-image.png            # 1200×630 social share image
public/favicon.svg                    # your favicon
public/images/projects/*              # project screenshots
public/images/moments/*               # moment / event photos
public/images/companies/*             # company logos
public/icons/*.png                    # tech-stack icons
```

### Colors & typography

Design tokens (colors, fonts, radii, shadows, marquee timing) live at the top of
[`src/index.css`](src/index.css) inside the Tailwind v4 `@theme` block. Change them
once and the whole site follows.

---

## Features

- Fully responsive: desktop → laptop → tablet → mobile (adaptive type, grids, nav)
- Animated stat counters, scroll reveals, subtle card tilt, hover micro-interactions
- Infinite tech-stack marquee (pauses on hover)
- Accessible: skip link, semantic landmarks, keyboard-dismissable modals, focus styles
- `prefers-reduced-motion` respected across all animations
- SEO: title, meta description, Open Graph / Twitter cards, JSON-LD `Person` schema
- Lazy-loaded images with graceful fallbacks

---

## Deployment

The build output is a static `dist/` folder — deploy anywhere:

- **Vercel / Netlify:** connect the repo, build command `npm run build`, output `dist`
- **GitHub Pages / Cloudflare Pages:** publish the `dist/` directory

Remember to update `meta.canonical`, `meta.ogImage`, and the URLs in `index.html`
before going live.
