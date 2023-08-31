// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image-edge", "nuxt-schema-org"],
  typescript: {
    strict: true
  },
  webpack: {
    extractCSS: true
  },
  routeRules: {
    "/blog": { redirect: "https://blog.kurojifusky.com" }
  },
  css: ["@kuro/ui/shared.css", "~/assets/fonts.css"],
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
      script: [
        {
          "async": true,
          "defer": true,
          "src": "https://analytics.umami.is/script.js",
          "data-website-id": process.env.UMAMI_ID || "Dev Mode"
        }
      ],
      link: [
        { rel: "shortcut icon", href: "./favicon.png", fetchpriority: "high" }
      ]
    }
  },
  runtimeConfig: {
    public: {
      domainName: process.env.DOMAIN_NAME
    }
  },
  build: {
    transpile: ["gsap"]
  }
})
