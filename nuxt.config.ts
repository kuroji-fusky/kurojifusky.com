// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/image-edge"],
	css: ["~/assets/css/main.scss"],
	typescript: {
		shim: false,
		strict: true,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {
			link: [{ href: "./favicon.png" }],
		},
	},
})
