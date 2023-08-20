// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      link: [{ rel: "icon", href: "/favicon.png", fetchpriority: "high" }],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index,follow,noai,noimageai" },
        {
          property: "og:site_name",
          content: "Kuroji Fusky Blog",
        },
      ],
      script: [
        {
          async: true,
          src: "https://analytics.umami.is/script.js",
          "data-website-id": process.env.UMAMI_ID || "",
        },
      ],
      bodyAttrs: {
        class: "text-white bg-kuro-dark2 font-inter",
      },
    },
  },
  runtimeConfig: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://blog.kurojifusky.com",
    },
  },
  modules: ["@nuxt/image-edge", "nuxt-schema-org", "nuxt-simple-sitemap"],
  css: ["~/assets/css/main.scss"],
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  webpack: {
    extractCSS: true,
  },
  nitro: {
    baseUrl: "https://blog.kurojifusky.com",
    prerender: {
      crawlLinks: true,
    },
  },
  image: {
    domains: ["images.ctfassets.net", "res.cloudinary.com"],
    contentful: {},
  },
})
