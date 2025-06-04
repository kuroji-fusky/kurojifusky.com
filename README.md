<h1 align="center">
  <a href="https://kurojifusky.com">kurojifusky.com</a>
</h1>

The source code of `kurojifusky.com` written in Astro and Svelte.

## Project structure

> [!CAUTION]
> This codebase is a dumpster fire, proceed carefully before you get a panic attack.

This is a monorepo setup with Yarn workspaces; uses [Biome](https://biomejs.dev) and [Knip](https://knip.dev) for codebase upkeep

- `front`: An abomination of a site
- `packages`
  - `kuro-time`: A small util library for parsing and formatting time and dates
  - `svelte-timeline`: A custom implementation of GSAP's [Timeline](https://gsap.com/docs/v3/GSAP/Timeline) feature using Svelte's built-in animations
- `strapi`: Headcanons galore

## Running the abominations locally

### Prerequisties

- Node.js v22 or higher (LTS recommended)
- Yarn package manager

### Setup

After cloning, install dependencies with `yarn`:

```bash
yarn install
```

#### Website

Start the a dev server with:

```
yarn dev
```

Which exposes <http://localhost:4321>.

#### Strapi

WIP

## Copyright

© 2021-2025 Kerby Keith Aquino
