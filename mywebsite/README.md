# Portfolio — Jassim Mohammed Salim

Personal portfolio site, styled after a GitHub profile page. Built with React 19, TypeScript, and Vite 8.

## Stack

- React 19 + TypeScript
- Vite 8, with the React Compiler enabled (auto-memoization)
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- `lucide-react` / `react-icons` for icons

## Getting started

```bash
npm install
npm run dev       # start dev server with HMR
npm run build     # type-check then bundle for production
npm run lint      # run ESLint
npm run preview   # serve the production build locally
```

All portfolio content (bio, experience, projects, skills, certifications, education) lives in `src/data.ts` — edit that file to update the site's content.

## Deployment

A multi-stage `Dockerfile` builds the app and serves the static output with nginx (`nginx.conf`), configured for `jassim-dev.duckdns.org` over HTTPS.

```bash
docker build -t portfolio .
docker run -p 80:80 -p 443:443 portfolio
```
