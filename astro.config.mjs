// @ts-check
import { defineConfig, passthroughImageService } from "astro/config"

import tailwind from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"

import vercel from "@astrojs/vercel/serverless"

import autoprefixer from "autoprefixer"
import Icons from "unplugin-icons/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import tailwindcss from "@tailwindcss/vite"

import svelte from "@astrojs/svelte";

export default defineConfig({
  output: "server",
  adapter: vercel({
    isr: true
  }),
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