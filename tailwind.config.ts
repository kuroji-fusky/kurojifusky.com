import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{astro,md,mdx,ts}"],
  plugins: [typography]
} satisfies Config
