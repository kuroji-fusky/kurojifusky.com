// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/image-edge"],
	build: {
		transpile: ["gsap"],
	},
	css: ["~/assets/css/main.scss"],
	plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],

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
})
