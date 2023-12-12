import { baseUrls } from "@kuro/shared"

export const useTastySEO = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const route = useRoute()
  const shokoy = useRuntimeConfig().public.siteUrl

  const creator = baseUrls.twitterAuthor

  const _url = `${shokoy}${route.fullPath}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: _url,
    twitterTitle: title,
    twitterDescription: description,
    twitterSite: creator,
    twitterCreator: creator,
  })

  useHead({
    link: [{ rel: "canonical", href: _url }],
  })
}
