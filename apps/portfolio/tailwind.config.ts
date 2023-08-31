import type { Config } from "tailwindcss"

import kuroTailwindCfg from "@kuro/ui/kuro-tailwind"

const config: Config = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  presets: [kuroTailwindCfg]
}

export default config
