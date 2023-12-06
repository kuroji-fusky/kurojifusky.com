import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import prefetch from "@astrojs/prefetch"
import sitemap from "@astrojs/sitemap"
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    image(),
    prefetch(),
    sitemap({
      changefreq: "hourly",
    }),
  ],
  site: "https://blog.kurojifusky.com/",
})
