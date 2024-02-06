import { baseUrls } from "@kuro/shared"
import { SITE_TITLE } from "~/constants"

export const useSEO = ({ title, description }: { title: string; description: string }) => {
  const route = useRoute()
  const baseUrl = useRuntimeConfig().public.siteUrl ?? "http://localhost:3000"

  const creator = baseUrls.twitterAuthor

  const fullUrlPath = `${baseUrl}${route.fullPath}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: fullUrlPath,
    ogSiteName: SITE_TITLE,
    twitterSite: creator,
    twitterCreator: creator
  })

  useHead({
    link: [{ rel: "canonical", href: fullUrlPath }]
  })
}
