import node from "@astrojs/node"
import cloudflare from "@astrojs/cloudflare"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import svelte from "@astrojs/svelte"
import { defineConfig, passthroughImageService } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import Icons from "unplugin-icons/vite"

export default defineConfig({
  output: "server",
  adapter: !!process.env.CF_MODE
    ? cloudflare({
        imageService: "passthrough"
      })
    : node({
        mode: "standalone"
      }),
  redirects: {
    "/blog/posts/[slug]": "/blog/[slug]",
    "/blog/post/[slug]": "/blog/[slug]",
    "/posts/[slug]": "/blog/[slug]",
    "/post/[slug]": "/blog/[slug]"
  },

  prefetch: {
    prefetchAll: true
  },

  integrations: [sitemap(), mdx(), svelte()],

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
        customCollections: {
          kuro: FileSystemIconLoader("./src/lib/icons/kuro"),
          brands: FileSystemIconLoader("./src/lib/icons/brands")
        }
      })
    ]
  },

  site: "https://kurojifusky.com",

  image: {
    service: passthroughImageService()
  }
})
