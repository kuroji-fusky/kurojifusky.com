type PageMeta = Partial<{
  title: string
  description: string
}>

export default function usePageMeta({ title, description }: PageMeta) {
  const _SITE_TITLE = "Kuroji Fusky"
  const _CREATOR = "@kurojifusky"

  useSeoMeta({
    title: `${title} | ${_SITE_TITLE}`,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterCreator: _CREATOR,
    twitterSite: _CREATOR
  })
}
