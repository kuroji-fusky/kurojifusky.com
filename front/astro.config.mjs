import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import svelte from "@astrojs/svelte"
import sitemap from "@astrojs/sitemap"
import Icons from "unplugin-icons/vite"
import cloudflare from '@astrojs/cloudflare';
import sanity from "@sanity/astro";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

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
      projectId: env.SANITY_STUDIO_PROJECT_ID,
      dataset: env.SANITY_STUDIO_DATASET,
      useCdn: false
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