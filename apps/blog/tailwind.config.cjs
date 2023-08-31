/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(({ addBase, theme }) => {
      addBase({
        "::selection": {
          "background-color": theme("colors.kuro-lavender.500")
        }
      })
    })
  ],
  presets: [require("@kuro/ui/kuro-tailwind.cjs")]
}
