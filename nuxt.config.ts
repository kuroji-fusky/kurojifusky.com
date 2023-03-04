// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
	modules: ["@nuxt/image-edge", "@nuxt/content"],
	css: ["~/assets/css/main.scss"],
	build: {
		transpile: ["gsap"],
	},
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ name: "robots", content: "noindex,nofollow" },
				{ property: "og:site_name", content: "Kuroji's Dump" },
			],
			link: [{ rel: "icon", href: "/favicon.png", type: "image/png" }],
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
			...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
		},
	},
	// @nuxt/image
	// @ts-ignore
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/",
		},
		domains: ["res.cloudinary.com"],
	},
	// @nuxt/content
	content: {
		documentDriven: true,
	},
})
