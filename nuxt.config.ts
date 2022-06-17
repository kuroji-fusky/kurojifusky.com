import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  meta: {
    link: [{ rel: "icon", href: "/favicon.ico" }],
  },
  css: ["/assets/global.scss", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/sanity",
    // "@nuxt/content"
  ],
  tailwindcss: {
    viewer: false,
  },
  webpack: {
    optimizeCSS: true,
  },
});
