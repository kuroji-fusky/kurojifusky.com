<h1 align="center">
  <a href="https://kurojifusky.com">kurojifusky.com</a>
</h1>

The source code of `kurojifusky.com` is written in Astro with Lit components.

## Project structure

> [!CAUTION]
> This codebase is **HOT GARBAGE.** Proceed carefully before you get a panic attack and potentially suffer from too much cringe.

This is a monorepo setup with Yarn workspaces; uses [Biome](https://biomejs.dev) and [Knip](https://knip.dev) for codebase upkeep

- `front`: An abomination of a site
- `packages`
  - `kuro-time`: A small util library for parsing and formatting time and dates
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
