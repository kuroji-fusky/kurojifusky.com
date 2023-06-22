// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
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
  routeRules: {
    "/blog": { redirect: "https://blog.kurojifusky.com" }
  },
  css: ["@kuro/ui/shared.scss", "~/assets/fonts.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
    }
  },
  app: {
    head: {
      htmlAttrs: {
        dir: "ltr",
        lang: "en"
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
  },
  build: {
    transpile: ["gsap"]
  }
})
