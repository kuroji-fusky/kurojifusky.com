import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import svelte from "@astrojs/svelte"
import sitemap from "@astrojs/sitemap"
import Icons from "unplugin-icons/vite"
import cloudflare from '@astrojs/cloudflare';

import sanity from "@sanity/astro";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    prerenderEnvironment: 'node',
  }),
  devToolbar: {
    enabled: false
  },
  integrations: [
    sitemap(),
    svelte(),
    sanity({
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      dataset: process.env.SANITY_STUDIO_DATASET
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
        customCollections: {
          kuro: FileSystemIconLoader("./src/lib/icons/kuro"),
          xp: FileSystemIconLoader("./src/lib/icons/xp"),
        }
      })
    ]
  },

  site: "https://kurojifusky.com",
});