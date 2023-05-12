import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel/serverless"
import image from "@astrojs/image"

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
		sitemap({
			customPages: ["https://blog.kurojifusky.com/"],
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
	output: "server",
	adapter: vercel({
		analytics: true,
	}),
})
