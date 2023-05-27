// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "nuxt-schema-org",
  ],
  typescript: {
    strict: true,
  },
  webpack: {
    extractCSS: true,
  },
  css: ["@kuro/ui/shared.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://blog.kurojifusky.com",
    },
  },
  devServer: {
    port: 4000,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge;chrome=1" },
        {
          property: "og:site_name",
          name: "Kuroji Fusky Blog",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "./favicon.ico", fetchpriority: "high" },
      ],
    },
  },
})
