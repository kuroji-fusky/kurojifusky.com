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

	// Transpile libraries for SSR
	build: {
		transpile: ["gsap"],
	},

	// Hardcoded metadata
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			meta: [{ property: "og:site_name", content: "Kuroji Fusky" }],
			link: [{ rel: "shortcut icon", href: "/favicon.png" }],
		},
	},
	webpack: {
		optimizeCSS: true,
	},
	runtimeConfig: {
		public: {
			dev: process.env.NODE_ENV !== "production",
			umami: process.env.UMAMI_ID
		},
	},
	typescript: {
		strict: true,
	},

	// Tailwind stuff
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
			...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
		},
	},

	// @nuxt/content
	content: {
		documentDriven: true,
	},

	// @nuxt/image
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/",
		},
		domains: ["res.cloudinary.com"],
	},

	// nuxt/security
	security: {
		headers: {
			// @ts-ignore
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
})
