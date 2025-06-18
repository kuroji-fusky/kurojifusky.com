<h1 align="center">
  <a href="https://kurojifusky.com">kurojifusky.com</a>
</h1>

The source code of `kurojifusky.com` is written in Astro and Svelte.

## Project structure

> [!CAUTION]
> This codebase is a dumpster fire. Proceed carefully before you get a panic attack and potentially suffer a cardiac arrest from too much cringe.

This is a monorepo setup with Yarn workspaces; uses [Biome](https://biomejs.dev) and [Knip](https://knip.dev) for codebase upkeep

- `front`: An abomination of a site
- `packages`
  - `kuro-time`: A small util library for parsing and formatting time and dates
  - `svelte-animation-timeline`: A custom implementation of GSAP's [Timeline](https://gsap.com/docs/v3/GSAP/Timeline) feature using Svelte's built-in animations
- `strapi`: CMS that'll give me the ability to post Nick Wilde fanfics

## Running the abominations locally

### Prerequisites

- Node.js v22 or higher (LTS recommended)
- Yarn package manager

### Setup

After cloning, install dependencies with `yarn`:

```console
yarn install
```

#### Website

Start the dev server with:

```console
yarn dev
```

Which exposes <http://localhost:4321>.

#### Strapi

WIP

## Copyright

© 2021-2025 Kerby Keith Aquino
