# Next.js Template

A reusable starting point for new Next.js projects — TypeScript (strict), Tailwind CSS, shadcn/ui-style components, and Prettier/ESLint already wired together and tested.

## What's included

- **Next.js (App Router)** + **TypeScript** with extra strict compiler flags (`noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- **Tailwind CSS v4** with a full CSS-variable theme (light/dark via `.dark` class, not just OS preference)
- **shadcn/ui** (Radix + Nova preset) — `Button`, `Card`, `Input` already added; run `npx shadcn@latest add <component>` for more
- **Prettier** (with `prettier-plugin-tailwindcss` for automatic class sorting) + **ESLint**, configured not to conflict with each other
- **Central site config** (`src/config/site.ts`) and `.env.example` for environment variables
- Folder structure ready for growth: `src/components/ui`, `src/lib`, `src/hooks`, `src/types`, `src/config`

## Getting started

1. Click **Use this template** on GitHub (or clone directly) to create a new project from this base.
2. Install dependencies:

```bash
   npm install
```

3. Copy the env file and fill in real values:

```bash
   cp .env.example .env.local
```

4. Run the dev server:

```bash
   npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | What it does                             |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the dev server                     |
| `npm run build`        | Production build                         |
| `npm run start`        | Run the production build                 |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format all files with Prettier           |
| `npm run format:check` | Check formatting without writing changes |
| `npm run typecheck`    | Run `tsc --noEmit`                       |

## Adding more shadcn/ui components

```bash
npx shadcn@latest add <component-name>
```

Components land in `src/components/ui/` and automatically match the theme in `src/app/globals.css`.

## Project structure

```
src/
├── app/            # App Router pages and layouts
├── components/ui/  # shadcn/ui components
├── config/         # Site-wide config (src/config/site.ts)
├── hooks/          # Custom React hooks
├── lib/            # Utilities (cn() helper, etc.)
└── types/          # Shared TypeScript types
```
