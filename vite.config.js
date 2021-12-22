import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  alias: {
    "@": resolve(__dirname, "./src"),
    "@!": resolve(__dirname, "./public"),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/global.scss';`,
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
