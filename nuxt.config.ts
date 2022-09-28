import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  keepalive: true,
  meta: {
    link: [
      {
        rel: "icon",
        href: "https://res.cloudinary.com/skepfusky-dookie/image/upload/c_thumb,g_face,h_220,w_220/c_crop,h_250,w_200,x_8,y_7/v1662975456/comm_for_davey_g2_i3nmhp.png"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      }
    ],
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA}` },
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.GA}');`
      }
    ]
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  runtimeConfig: {
    public: {
      GA: process.env.GA
    }
  },
  tailwindcss: {
    viewer: false
  },
  webpack: {
    optimizeCSS: true
  }
})
