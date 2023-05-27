// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]]
      }
    ],
    "@nuxt/content",
    "@nuxt/image-edge",
    "nuxt-schema-org"
  ],
  typescript: {
    strict: true
  },
  webpack: {
    extractCSS: true
  },
  css: ["@kuro/ui/shared.scss", "~/assets/fonts.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://kurojifusky.com"
    }
  },
  app: {
    head: {
      htmlAttrs: {
        style: "scroll-behavior: initial; overflow-x: hidden;",
        lang: "en",
        dir: "ltr"
      },
      bodyAttrs: {
        class: "bg-kuro-dark2 text-kuro-lavender-50"
      },
      meta: [
        { "http-equiv": "X-UA-Compatible", "content": "IE=edge;chrome=1" },
        {
          property: "og:site_name",
          name: "Kuroji Fusky"
        }
      ],
      link: [
        { rel: "shortcut icon", href: "./favicon.png", fetchpriority: "high" }
      ]
    }
  }
})
