// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
	modules: [
		"nuxt-security",
		"@nuxt/image-edge",
		"@nuxt/content",
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
			},
		],
	],
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
			link: [{ rel: "icon", href: "/favicon.png" }],
		},
	},
	webpack: {
		optimizeCSS: true,
	},
	typescript: {
		strict: true,
	},
	security: {
		headers: {
			hidePoweredBy: false,
			xXSSProtection: "1",
			contentSecurityPolicy: {
				"img-src": [
					"'self'",
					"data:",
					"https://res.cloudinary.com",
					"https://images.unsplash.com",
				],
			},
			crossOriginEmbedderPolicy: "unsafe-none",
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
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/",
		},
		domains: ["res.cloudinary.com"],
	},
})
