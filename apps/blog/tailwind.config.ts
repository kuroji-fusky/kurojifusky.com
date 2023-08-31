import type { Config } from "tailwindcss"
import typePlugin from "@tailwindcss/typography"
import customPlugin from "tailwindcss/plugin"

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    typePlugin,
    customPlugin(({ addBase, theme }) => {
      addBase({
        "::selection": {
          "background-color": theme("colors.kuro-lavender.500")
        }
      })
    })
  ],
  presets: [require("@kuro/ui/kuro-tailwind.cjs")]
}

export default config
