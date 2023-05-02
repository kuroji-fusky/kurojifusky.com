import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	site: "https://blog.kurojfusky.com",
	integrations: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.startsWith("kfb-"),
				},
			},
		}),
		tailwind(),
		sitemap({ customPages: ["https://blog.kurojifusky.com/"] }),
	],
	output: "server",
	adapter: vercel({
		analytics: true,
	}),
})
