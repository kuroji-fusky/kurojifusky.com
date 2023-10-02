import type { Config } from "tailwindcss"
import customPlugin from "tailwindcss/plugin"
import kuroTailwindCfg from "@kuro/ui/tailwind.config"

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  presets: [kuroTailwindCfg],
  plugins: [
    customPlugin(({ addBase, theme }) => {
      addBase({
        "::selection": {
          "background-color": theme("colors.kuro-lavender.500")
        },
        "h1": {
          "font-size": "2.25rem",
          "font-weight": "bold"
        },
        "h2": {
          "font-size": "2rem",
          "font-weight": "bold"
        },
        "h3": {
          "font-size": "1.75rem",
          "font-weight": "bold"
        },
        "h4": {
          "font-size": "1.5rem",
          "font-weight": "bold"
        }
      })
    })
  ],
}

export default config
