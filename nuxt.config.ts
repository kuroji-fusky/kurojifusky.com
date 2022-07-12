import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
  ],
  typescript: {
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
  // @nuxtjs/image-edge config
  // !! May break shit
  image: {
    screen: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    domains: [],
    strapi: {
      url: "http://localhost:1337/uploads/",
    }
  },
  // @nuxtjs/tailwind config
  tailwindcss: {
    viewer: false,
    configPath: "tailwind.config.ts",
  },
  // @nuxtjs/color-mode config
  colorMode: {
    fallback: "dark",
  },
})
