export function usePageMeta({
  isBlogPost,
  title,
  description,
}: {
  isBlogPost?: boolean
  title?: string
  description?: string
}) {
  const router = useRoute()
  const SITE_NAME = "Kuroji Fusky Blog"
  const CREATOR = "@kurojifusky"

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
    ogType: !isBlogPost ? "website" : "article",
    twitterTitle: title,
    twitterDescription: description,
    twitterCreator: CREATOR,
    twitterSite: CREATOR,
  })
}
