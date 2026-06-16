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
- ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`

## Architecture

This is a single-page personal portfolio app. All application code lives in `src/`:

- `main.tsx` — React root mount
- `App.tsx` — single top-level component; currently the default Vite starter template
- `App.css` — component-scoped styles for `App.tsx`
- `index.css` — global CSS variables (light/dark theme via `prefers-color-scheme`), typography, and `#root` layout
- `assets/` — static images imported directly into components

Global design tokens are CSS custom properties defined in `index.css` (`--accent`, `--bg`, `--border`, etc.) with automatic dark-mode overrides. Use these variables rather than hardcoded colours when styling.

The `#root` element is a centered 1126 px column with border rails (`border-inline`) that spans `100svh`.

## TypeScript config

`tsconfig.app.json` enforces `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`. Imports must use `verbatimModuleSyntax` (prefer `import type` for type-only imports).
