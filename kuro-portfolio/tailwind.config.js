/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@kuro/design/tailwind.config.js")

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	...sharedConfig,
}
