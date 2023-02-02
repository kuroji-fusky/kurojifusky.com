// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/image-edge"],
	build: {
		transpile: ["gsap"],
	},
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
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/",
		},
	},
})
