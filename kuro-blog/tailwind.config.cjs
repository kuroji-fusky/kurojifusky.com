/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@kuro/design/tailwind.config.js")
const basePlugin = require("tailwindcss/plugin")

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	...sharedConfig,
}
