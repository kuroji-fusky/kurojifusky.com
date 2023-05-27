// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    "@nuxt/content",
    "@nuxt/image-edge",
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
      siteUrl: "https://kurojifusky.com",
    },
  },
  devServer: {
    port: 3000,
  },
  app: {
    head: {
      htmlAttrs: {
        style: "scroll-behavior: initial; overflow-x: hidden;",
        lang: "en",
        dir: "ltr",
      },
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge;chrome=1" },
        {
          property: "og:site_name",
          name: "Kuroji Fusky",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "./favicon.ico", fetchpriority: "high" },
      ],
    },
  },
})
