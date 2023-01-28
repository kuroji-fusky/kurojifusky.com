/** @type {import('tailwindcss').Config} */
const basePlugin = require("tailwindcss/plugin")

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
  plugins: [
    basePlugin(({addBase, theme}) => {
        addBase({
            body: {
                fontFamily: theme("fontFamily.open-sans")
            }
        })
    }),
    require("@tailwindcss/typography")],
}
