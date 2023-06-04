// https://nuxt.com/docs/api/configuration/nuxt-config
const GA_INJECT = `
window.dataLayer=window.dataLayer||[];
window.gtag=function gtag(){dataLayer.push(arguments)};
gtag('js', new Date());
gtag('config', '${process.env.GA_MEASUREMENT_ID}',{ send_page_view: false });
`

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
    "@nuxtjs/partytown",
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
  partytown: {
    forward: ["dataLayer.push"]
  },
  app: {
    head: {
      htmlAttrs: {
        style: "scroll-behavior: initial; overflow-x: hidden;",
        lang: "en",
        dir: "ltr"
      },
      bodyAttrs: {
        class: "bg-kuro-dark2 text-kuro-lavender-50 font-inter"
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
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`,
          type: "text/partytown",
          async: true
        },
        {
          innerHTML: GA_INJECT
        }
      ]
    }
  },
  build: {
    transpile: ["gsap"]
  }
})
