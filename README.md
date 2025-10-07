## Jackson Steele — Portfolio

Modern portfolio built with Next.js (App Router) + Tailwind, with support for embedding built projects as static subdirectories under `public/<slug>/`.

### Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Structure

- `app/`: Next.js routes
  - `/` homepage with contact
  - `/projects` projects listing
  - `/projects/[slug]` optional detail pages sourced from `data/projects.ts`
- `public/<slug>/`: built, standalone apps (e.g., `public/rank-your-posterity/`)
- `middleware.ts`: rewrites deep links like `/rank-your-posterity/*` to `/rank-your-posterity/index.html`
- `scripts/copy-embedded-app.ts`: helper to copy a built app into `public/<slug>/`
- `data/projects.ts`: the list of projects powering the listing and detail pages

### Add the Rank Your Posterity app

1) Build the Vite app with base path set to `/rank-your-posterity/`.

In the Vite project (`rank-your-posterity`):

```ts
// vite.config.ts
export default defineConfig({
  base: '/rank-your-posterity/',
  // ...other config
})
```

Then build:

```bash
npm run build
```

2) Copy the `dist` output into this repo under `public/rank-your-posterity/`:

```bash
npx ts-node scripts/copy-embedded-app.ts rank-your-posterity /absolute/path/to/rank-your-posterity/dist
```

Alternatively, copy files manually to `public/rank-your-posterity/`.

3) Ensure the project is listed in `data/projects.ts`:

```ts
{
  slug: 'rank-your-posterity',
  title: 'Rank Your Posterity',
  description: 'A React + TypeScript app to rank hypothetical descendants by traits.',
  embedPath: '/rank-your-posterity/',
  detailPath: '/projects/rank-your-posterity'
}
```

4) Run the portfolio locally to verify:

```bash
npm run dev
```

Visit `http://localhost:3000/rank-your-posterity/` and navigate within the app. Deep links like `/rank-your-posterity/foo/bar` will load via `middleware.ts`.

### Add future projects

Repeat the same steps with a new slug:

1) Build the project with `base: '/<slug>/'` if using Vite (or equivalent public path in other tools).
2) Copy the built files into `public/<slug>/` (use the copy script or manual copy).
3) Add an entry in `data/projects.ts` with `slug`, `title`, `description`, optional `embedPath` and `detailPath`.

### Notes

- The middleware’s SPA slugs list is maintained in `middleware.ts`. Add new slugs there to enable deep-link rewrites.
- If your embedded app relies on client-side routing, ensure the correct base/publicPath so assets resolve under `/<slug>/`.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
