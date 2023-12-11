import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    sitemap({
      changefreq: "hourly",
    }),
  ],
  prefetch: true,
  site: "https://blog.kurojifusky.com/",
  image: {
    domains: ["images.ctfassets.net"],
  },
})
