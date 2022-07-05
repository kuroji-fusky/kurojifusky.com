import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxtjs/color-mode"],
  typescript: {
    strict: true,
    shim: false,
  },
  css: [
    "assets/scss/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  meta: {
    link: [
      {
        name: "http-equiv",
        content: "X-UA-Compatible",
      },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
      },
    ],
  },
  webpack: {
    optimizeCSS: true,
  },
  // @nuxtjs/tailwind config
  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },
  // @nuxtjs/color-mode config
  colorMode: {
    fallback: "dark",
    storageKey: "sf-theme-mode",
  },
});
