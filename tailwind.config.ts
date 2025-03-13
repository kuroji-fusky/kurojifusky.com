import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{astro,md,mdx,ts}"],
  plugins: [typography]
} satisfies Config