import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import svelte from "@astrojs/svelte"
import sitemap from "@astrojs/sitemap"
import Icons from "unplugin-icons/vite"
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare(),

  devToolbar: {
    enabled: false
  },

  output: "server",

  integrations: [sitemap(), svelte()],


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


});