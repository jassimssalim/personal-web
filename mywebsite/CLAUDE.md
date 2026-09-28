# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server with HMR
npm run build     # type-check then bundle for production (tsc -b && vite build)
npm run lint      # run ESLint
npm run preview   # serve the production build locally
```

There is no test suite configured.

## Stack

- **React 19** with TypeScript, bundled by **Vite 8**
- **React Compiler** (`babel-plugin-react-compiler`) is enabled via `@rolldown/plugin-babel` — it auto-memoizes components, so manual `useMemo`/`useCallback` are rarely needed
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first config, no `tailwind.config.js`
- `lucide-react` and `react-icons` for icons
- ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`

## Architecture

This is a single-page personal portfolio, styled after a GitHub profile page (sticky repo-style tab bar, sidebar profile card, contribution graph, pinned projects, commit-style experience timeline). All application code lives in `src/`:

- `main.tsx` — React root mount
- `App.tsx` — layout shell: `Particles` background, `Navbar`, `Sidebar` + content column (`About`, `Projects`, `Experience`, `Skills`, `Certifications`, `Education`), `Footer`
- `data.ts` — **single source of truth for all content** (personal info, experience, personal projects, skills, certifications, education). Content edits go here, not in the components
- `hooks/useTheme.ts` — dark mode state, persisted to `localStorage`, toggles a `.dark` class on `<html>`
- `index.css` — GitHub Primer color tokens as CSS custom properties (`--gh-*`) on `:root`/`.dark`, re-exported through `@theme inline` as Tailwind `--color-*` tokens
- `components/` — one component per portfolio section, plus `Particles.tsx` (decorative animated canvas background) and `ContributionGraph.tsx` (a deterministic fake GitHub contribution graph that spells a hidden message)
- `assets/` — static images/PDFs imported directly into components (bundled and hashed by Vite)

`public/` holds files served as-is at the site root: `favicon.svg`, `manifest.json`, `robots.txt`, `sitemap.xml`, and `og-image.png` (Open Graph/Twitter share image).

### Theming

Colors are defined once as `--gh-*` variables on `:root` (light) and `.dark` (dark), then bridged into Tailwind via `@theme inline` as `--color-*` tokens. The `inline` keyword is load-bearing — it makes Tailwind utilities emit `var(--gh-*)` per element so the `.dark` class override cascades correctly. Style with the Tailwind utilities this produces (`bg-canvas`, `text-fg-muted`, `border-border-default`, `text-accent`, etc.) rather than hardcoded colors. `index.html` also inlines a small blocking script that applies `.dark` before first paint, based on `localStorage`/`prefers-color-scheme`, to avoid a light-mode flash.

The `#root` element is not specially constrained; the app layout is a `max-w-[1280px]` centered Tailwind container defined in `App.tsx`.

## TypeScript config

`tsconfig.app.json` enforces `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`. Imports must use `verbatimModuleSyntax` (prefer `import type` for type-only imports).
