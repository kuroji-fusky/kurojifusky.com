import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/global-styles.scss';`,
      },
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  plugins: [vue()],
});
