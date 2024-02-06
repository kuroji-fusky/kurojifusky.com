import kurowo from "@kuro/shared/tailwind.config"
import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{astro,html,js,ts,vue}"],
  presets: [kurowo]
} as Config
