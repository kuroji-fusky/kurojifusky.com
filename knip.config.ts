import type { KnipConfig } from "knip"

const config: KnipConfig = {
  entry: ["front/**/*.{ts,mjs,js,svelte,astro}", "packages/**"],
  project: ["**/*.{mjs,js,ts,svelte,astro}!"],
  ignore: ["strapi/config/**", "strapi/src/admin/**"],
  ignoreDependencies: [
    "@astrojs/*",
    "@fontsource/*",
    "@strapi/*",
    "@tailwindcss/typography",
    "@iconify-json/*",
    "better-sqlite3",
    "astro-icon",
    "tailwindcss"
  ]
}

export default config
