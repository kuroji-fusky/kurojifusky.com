import { baseUrls } from "@kuro/shared"

export default defineNuxtRouteMiddleware((_, from) => {
  if (from.path === "/blog") {
    return navigateTo(baseUrls.blog, { external: true })
  }
})
