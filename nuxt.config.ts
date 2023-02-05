// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
	modules: ["@nuxt/image-edge"],
	build: {
		transpile: ["gsap"],
	},
	css: ["~/assets/css/main.scss"],
	app: {
		head: {
			link: [{ rel: "icon", href: "./favicon.ico" }],
		},
	},
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/",
		},
	},
	typescript: {
		strict: true,
	},
	runtimeConfig: {
		public: {
			dev: process.env.NODE_ENV !== "production",
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
