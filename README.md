# Next.js Template

A reusable starting point for new Next.js projects — TypeScript (strict), Tailwind CSS, shadcn/ui components, dark mode, and a set of pre-built layout/content components, all wired together and tested.

## What's included

### Core setup

- **Next.js (App Router)** + **TypeScript** with extra strict compiler flags (`noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- **Tailwind CSS v4** with a full CSS-variable theme, light/dark mode via the `.dark` class
- **shadcn/ui** (Radix + Nova preset) — run `npx shadcn@latest add <component>` to add more
- **Prettier** (with automatic Tailwind class sorting) + **ESLint**, configured not to conflict
- **Central site config** (`src/config/site.ts`) and `.env.example` for environment variables

### Layout & UI components

- **`Container`** (`src/components/layout/container.tsx`) — consistent max-width/padding wrapper, supports `as` prop to render as any element
- **`Navbar`** (`src/components/layout/navbar.tsx`) — responsive header with desktop links and a mobile `Sheet` menu
- **`Footer`** (`src/components/layout/footer.tsx`) — site links + auto-updating copyright year
- **`ThemeToggle`** (`src/components/layout/theme-toggle.tsx`) — light/dark switch, persisted via `next-themes`
- **`ThemeProvider`** (`src/components/providers/theme-provider.tsx`) — wraps the app to enable theming; wired into `src/app/layout.tsx`
- **`EmptyState`** (`src/components/shared/empty-state.tsx`) — generic "nothing here yet" placeholder (empty search results, empty lists, etc.)
- **`ContactForm`** (`src/components/shared/contact-form.tsx`) — basic contact form with submit state handling; submission logic is a placeholder — wire up a real endpoint per project

### Special pages (Next.js conventions)

- **`src/app/not-found.tsx`** — styled 404 page, shown automatically for unmatched routes
- **`src/app/error.tsx`** — styled error boundary with a "Try again" button, shown automatically when a route throws

### Folder structure

src/
├── app/ # App Router pages, layouts, and special files
├── components/
│ ├── ui/ # shadcn/ui components (CLI-managed)
│ ├── layout/ # Navbar, Footer, Container, ThemeToggle
│ ├── shared/ # EmptyState, ContactForm, other reusable content components
│ └── providers/ # ThemeProvider and any future context providers
├── config/ # Site-wide config (site.ts)
├── hooks/ # Custom React hooks
├── lib/ # Utilities (cn() helper, etc.)
└── types/ # Shared TypeScript types

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

4. Update `src/config/site.ts` with your project's name/description.
5. Run the dev server:

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

## Notes for future projects

- `ContactForm` logs submissions to the console — replace the `console.log`/fake delay in `handleSubmit` with a real API route or form service before using it live.
- The mobile navigation uses shadcn's `Sheet` component — update the `navigation` array in `navbar.tsx` to match your project's actual pages.
- Auth and database/ORM are intentionally **not** included — add per project depending on what each one needs (e.g. NextAuth, Prisma).
