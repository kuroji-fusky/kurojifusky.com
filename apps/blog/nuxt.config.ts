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
          "data-website-id": process.env.UMAMI_ID || "Dev Mode",
        },
      ],
      bodyAttrs: {
        class: "text-white bg-kuro-dark2 font-open-sans",
      },
    },
  },
  runtimeConfig: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
  },
  modules: ["@nuxt/image-edge"],
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
  image: {
    domains: ["images.ctfassets.net", "res.cloudinary.net"],
    contentful: {},
  },
})
