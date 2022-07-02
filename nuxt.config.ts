import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
    shim: false,
  },
  meta: {
    link: [
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
      },
    ],
  },
  // @nuxtjs/tailwind config
  tailwind: {
    exposeConfig: true,
  }
});
