import cloudflare from "@astrojs/cloudflare"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import svelte from "@astrojs/svelte"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, passthroughImageService } from "astro/config"
import autoprefixer from "autoprefixer"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import Icons from "unplugin-icons/vite"

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  redirects: {
    "/blog/category": "/blog",
    "/blog/author": "/blog",
    "/blog/authors": "/blog",
    "/blog/posts/[slug]": "/blog/[slug]",
    "/blog/post/[slug]": "/blog/[slug]",
    "/posts/[slug]": "/blog/[slug]",
    "/post/[slug]": "/blog/[slug]"
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [svelte(), sitemap(), mdx()],
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
    ],
    css: {
      postcss: {
        plugins: [autoprefixer({})]
      }
    }
  },
  site: "https://kurojifusky.com",
  image: {
    service: passthroughImageService()
  }
})
