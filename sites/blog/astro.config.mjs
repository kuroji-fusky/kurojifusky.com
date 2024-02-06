import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4000
  },
  integrations: [
    vue(),
    tailwind(),
    sitemap({
      changefreq: "hourly"
    })
  ],
  prefetch: {
    prefetchAll: true
  },
  site: "https://blog.kurojifusky.com/",
  image: {
    domains: ["images.ctfassets.net"]
  },
  redirects: {
    "/post/[slug]": "/posts/[slug]",
    "/blog/[slug]": "/posts/[slug]",
    "/article/[slug]": "/posts/[slug]",
    "/articles/[slug]": "/posts/[slug]"
  }
})
