// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/content",
    "nuxt-lucide-icons",
    "nuxt-simple-sitemap",
    "@nuxt/image",
  ],
  // Transpile modules
  build: {
    transpile: ["gsap"],
  },
  // .env
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "",
    },
  },
  // Root dir
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          async: true,
          src: "https://eu.umami.is",
          "data-website-id":
            process.env.NUXT_PUBLIC_UMAMI_ID || "No ID specified",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          sizes: "64x64",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "128x128",
          type: "image/png",
          href: "/apple-icon-128.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "192x192",
          type: "image/png",
          href: "/apple-icon-192.png",
        },
      ],
      bodyAttrs: {
        class:
          "bg-kuro-dark2 text-kuro-violet-50 text-sm md:text-base xl:text-lg font-inter selection:bg-purple-600 selection:text-white",
      },
    },
  },
  // nuxt-image
  image: {
    quality: 85,
    cloudinary: {
      baseURL: "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/",
    },
    domains: ["res.cloudinary.com"],
  },
  // Sitemap
  sitemap: {
    strictNuxtContentPaths: true,
  },
  // Tailwind CSS
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Misc.
  nitro: {
    preset: "vercel",
  },
});
