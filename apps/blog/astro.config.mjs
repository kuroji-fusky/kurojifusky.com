import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import vercel from "@astrojs/vercel/serverless"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  integrations: [
    image(),
    vue(),
    tailwind(),
    sitemap()
  ],
  output: "server",
  adapter: vercel({
    analytics: true
  })
})
