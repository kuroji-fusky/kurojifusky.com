import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import svelte from "@astrojs/svelte"
import sitemap from "@astrojs/sitemap"
import Icons from "unplugin-icons/vite"
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    prerenderEnvironment: 'node',
  }),
  devToolbar: {
    enabled: false
  },
  integrations: [sitemap(), svelte()],
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