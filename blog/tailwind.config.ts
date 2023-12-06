import type { Config } from "tailwindcss"
import kurowo from "@kuro/ui/tailwind.config"

export default {
  content: ["./src/**/*.{astro,html,js,ts,vue}"],
  presets: [kurowo]
} as Config
