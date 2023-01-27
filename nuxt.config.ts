// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/image-edge"],
	css: [
        "@fontsource/inter/400.css",
        "@fontsource/inter/600.css",
        "@fontsource/inter/700.css",
        "@fontsource/inter/800.css",
        "@fontsource/inter/900.css",
        "@fontsource/open-sans",
        "~/assets/css/main.scss"
    ],
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
