# Portfolio

Personal portfolio for [saratapusoa.com](https://saratapusoa.com) — a single-page React app. Frontend only; there is no backend, database, or CMS in this repo.

## Tech stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** — config-free; design tokens and component utilities live in [`src/index.css`](src/index.css) via `@theme` / `@utility`
- **shadcn/ui** (Base UI + `class-variance-authority`) with the `cn` helper in [`src/lib/utils.ts`](src/lib/utils.ts)
- **React Router 7** for client-side routing
- **Storybook 10** + **Chromatic** for component development and visual regression testing
- **Web3Forms** for the contact form (serverless — no backend)
- Deployed on **Vercel**

## Getting started

```bash
pnpm install
cp .env.example .env   # then fill in the values below
pnpm dev
```

The dev server runs at http://localhost:5173.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_WEB3FORMS_KEY` | for the contact form | Public [Web3Forms](https://web3forms.com) access key. Create a free key and paste it in `.env`. |
| `CHROMATIC_PROJECT_TOKEN` | for `pnpm chromatic` | Chromatic project token (set in your shell or CI, not in `.env`). |

`.env` is git-ignored; commit changes to `.env.example` instead.

## Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm typecheck` | Type-check with `tsc` |
| `pnpm lint` | Run ESLint |
| `pnpm storybook` | Run Storybook at http://localhost:6006 |
| `pnpm build-storybook` | Build the static Storybook |
| `pnpm chromatic` | Publish to Chromatic for visual review |

## Project structure

```
portfolio/
├── public/            # Static assets (fonts, images, resume.pdf)
├── src/
│   ├── components/    # UI components (+ Storybook stories) and shadcn/ui in components/ui
│   ├── pages/         # Route pages (Home, About, Contact, projects/)
│   │   └── sections/  # Page sections (Hero, Roles, CaseStudies, …)
│   ├── helpers/       # Small helpers (ScrollToTop, etc.)
│   ├── lib/           # cn() utility
│   ├── index.css      # Tailwind entry: @theme tokens + @utility shortcuts + fonts
│   └── main.tsx       # App entry
├── .storybook/        # Storybook config
├── components.json    # shadcn/ui config
└── vercel.json        # SPA rewrites for client-side routing
```

## Styling

Tailwind v4 is used without a `tailwind.config.*` file. All design tokens (colors, font
sizes, weights, fonts, shadows) and the reusable component utilities (`btn-primary`,
`h1`–`h4`, `page`, `navlink`, …) are defined in [`src/index.css`](src/index.css) using
`@theme` and `@utility`. Add shadcn/ui components with:

```bash
pnpm dlx shadcn@latest add <component>
```

## Deployment

Deployed on **Vercel** with the Vite framework preset. [`vercel.json`](vercel.json)
rewrites all routes to `index.html` so client-side routing works on refresh/deep links.
The custom domain `saratapusoa.com` is configured in the Vercel dashboard.

- Push to `main` → Vercel builds and deploys automatically.
- Set `VITE_WEB3FORMS_KEY` in the Vercel project's environment variables.
