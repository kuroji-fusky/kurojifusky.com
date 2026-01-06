import type { KnipConfig } from "knip"

const config: KnipConfig = {
  ignoreDependencies: [
    "@astrojs/*",
    "@fontsource/*",
    "@strapi/*",
    "@tailwindcss/typography",
    "@iconify-json/*",
    "better-sqlite3",
    "tailwindcss"
  ]
}

export default config
