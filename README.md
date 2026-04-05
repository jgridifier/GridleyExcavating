# Gridley Excavating

Website for Gridley Excavating, LLC — a gravel pit and material supplier based in Corning, NY. Sells gravel, topsoil, and mulch with pickup and delivery throughout Steuben, Chemung, and Schuyler Counties.

Live site: https://jgridifier.github.io/GridleyExcavating/

## Stack

- **React 19** with Vite 8
- **Framer Motion** for scroll animations and page transitions
- **Tailwind CSS v4** with `@theme` directive
- **React Router** (HashRouter for GitHub Pages compatibility)
- **Bun** as package manager (installed via Homebrew)

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, stats, product category cards, delivery section, gallery, contact strip |
| `/products` | Products & Pricing — gravel, topsoil, mulch, delivery charges |
| `/hours` | Hours & Location — hours, address, map embed |

## Dev

```bash
bun install
bun run dev
```

> Note: Vite and gh-pages CLIs are invoked directly (e.g. `bun node_modules/vite/bin/vite.js`) to work around a Node shebang issue when Node is not installed system-wide.

## Build & Deploy

```bash
bun run build
bun run deploy
```

Deploys to the `gh-pages` branch. GitHub Pages serves from that branch at the live URL above.

## Images

Product and gallery photos live in `public/images/`. Referenced at runtime via `import.meta.env.BASE_URL` so paths resolve correctly both locally and on GitHub Pages.

## Data

All products, pricing, hours, and gallery images are defined in `src/data/products.js`. Update prices there — no need to touch the page components.
