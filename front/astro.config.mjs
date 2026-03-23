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
  devToolbar: {
    enabled: false
  },

  output: "server",

  server: {
    headers: {
      "X-Clacks-Overhead": "GNU Terry Pratchett"
    }
  },

  adapter: !!process.env.CF_MODE
    ? cloudflare({
        imageService: "passthrough"
      })
    : node({
        mode: "standalone"
      }),

  redirects: {
    // "/blog/posts/[slug]": "/blog/[slug]",
    // "/blog/post/[slug]": "/blog/[slug]",
    // "/posts/[slug]": "/blog/[slug]",
    // "/post/[slug]": "/blog/[slug]",

    // "/fusky": "/what-is-a-fusky",
  },

  build: {
    assets: "_k"
  },

  prefetch: {
    prefetchAll: true
  },

  integrations: [sitemap(), svelte(), mdx()],

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        autoInstall: true,
        compiler: "astro",
        customCollections: {
          kuro: FileSystemIconLoader("./src/lib/icons/kuro")
        }
      })
    ]
  },

  site: "https://kurojifusky.com",

  image: {
    service: passthroughImageService()
  }
})
