import { baseUrls } from "@kuro/shared"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3000
  },
  devtools: { enabled: false },
  modules: [
    [
      "@nuxt/content",
      {
        markdown: {
          tags: {
            // I've lost my sleep for this for registering custom components
            // to be rendered to markdown, good lord
            pwrapper: "PWrapper"
          }
        }
      }
    ],
    "nuxt-lucide-icons",
    [
      "nuxt-simple-sitemap",
      {
        strictNuxtContentPaths: true
      }
    ],
    [
      "@nuxt/image",
      {
        quality: 85,
        cloudinary: {
          baseURL: "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/"
        },
        domains: ["res.cloudinary.com"]
      }
    ]
  ],
  // Transpile modules
  build: {
    transpile: ["gsap"]
  },
  site: {
    url: baseUrls.main
  },
  // .env
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }
  },
  // Root dir
  app: {
    // SEO stuff
    head: {
      htmlAttrs: {
        lang: "en"
      },
      script: [
        {
          async: true,
          src: baseUrls.umami,
          "data-website-id":
            process.env.NUXT_PUBLIC_UMAMI_ID || "No ID specified"
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          sizes: "64x64",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "apple-touch-icon",
          sizes: "128x128",
          type: "image/png",
          href: "/apple-icon-128.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "192x192",
          type: "image/png",
          href: "/apple-icon-192.png"
        },
        {
          rel: "dns-prefetch",
          href: "https://res.cloudinary.com/",
          fetchpriority: "high"
        },
        {
          rel: "dns-prefetch",
          href: "https://cdn.sanity.io/",
          fetchpriority: "high"
        }
      ],
      bodyAttrs: {
        class:
          "bg-kuro-dark2 text-kuro-violet-50 text-sm md:text-base xl:text-xl font-inter selection:bg-purple-600 selection:text-white"
      }
    }
  },
  // Tailwind CSS
  css: ["~/assets/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
    }
  },
  // Misc.
  nitro: {
    future: {
      nativeSWR: true
    }
  }
})
