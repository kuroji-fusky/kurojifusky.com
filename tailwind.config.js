/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
