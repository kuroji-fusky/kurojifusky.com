import type { Head } from "../../node_modules/@unhead/schema/dist"
import { CLOUDINARY_BASE_URL, cuties } from "./constants"
import { baseUrls } from "@kuro/shared"

const CDNUrls = ["res.cloudinary.com", "cdn.sanity.io"]

const preloadImgCDNUrls: Head["link"] = CDNUrls.map((url) => ({
  rel: "preconnect",
  href: `https://${url}/`,
  crossorigin: "",
  fetchpriority: "high"
}))

const preloadCuties: Head["link"] = cuties.map(({ file }) => ({
  rel: "preload",
  as: "image",
  content: `${CLOUDINARY_BASE_URL}/f_auto,q_85,w_280/fursonas/comms/${file}`,
  fetchpriority: "high"
}))

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
          baseURL: CLOUDINARY_BASE_URL
        },
        domains: ["res.cloudinary.com"]
      }
    ],
    "nuxt-og-image"
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
          "data-website-id": process.env.NUXT_PUBLIC_UMAMI_ID || "No ID specified"
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
        ...preloadImgCDNUrls,
        ...preloadCuties
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
