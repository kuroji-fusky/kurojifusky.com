import { defineConfig } from "astro/config"

import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import prefetch from "@astrojs/prefetch"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("kf")
        }
      }
    }),
    tailwind(),
    image(),
    prefetch(),
    sitemap()
  ]
})
