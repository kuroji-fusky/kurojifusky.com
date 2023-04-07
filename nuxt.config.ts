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

	// .env stuff
	runtimeConfig: {
		public: {
			CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
			CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
			CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
		},
	},

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

	// Tailwind stuff
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

	// nuxt/security
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
})
