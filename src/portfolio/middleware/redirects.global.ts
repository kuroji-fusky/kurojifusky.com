import { baseUrls } from "@kuro/shared"

const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

export default defineNuxtRouteMiddleware((to, from) => {
  if (from.path === "/secret") {
    return navigateTo(rickroll, { external: true })
  }

  if (from.path === "/blog") {
    return navigateTo(baseUrls.blog, { external: true })
  }
})
