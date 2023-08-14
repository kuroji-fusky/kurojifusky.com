export function usePageMeta({
  isBlogPost,
  title,
  description,
  img,
}: {
  isBlogPost?: boolean
  title?: string
  description?: string
  img?: string
}) {
  const router = useRoute()
  const SITE_NAME = "Kuroji Fusky Blog"
  const CREATOR = "@kurojifusky"

  const currentUrl = `https://blog.kurojifusky.com${router.fullPath}`

  const parseTitle = router.fullPath !== "/" ? `${title} | ${SITE_NAME}` : title

  const blogContents = !isBlogPost
    ? {}
    : {
        author: "Kuroji Fusky",
      }

  useSeoMeta({
    title: parseTitle,
    description: description,
    ...blogContents,
    ogTitle: title,
    ogDescription: description,
    ogUrl: currentUrl,
    ogType: !isBlogPost ? "website" : "article",
    ogImage: img,
    ogImageHeight: 1280,
    ogImageWidth: 630,
    twitterTitle: title,
    twitterDescription: description,
    twitterCreator: CREATOR,
    twitterSite: CREATOR,
  })

  useHead({
    link: [{ rel: "canonical", href: currentUrl }],
  })
}
