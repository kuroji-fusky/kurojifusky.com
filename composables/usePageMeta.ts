import { UseSeoMetaInput } from "@unhead/vue"

interface PageMetaProps {
	title: string
	description?: string
}

export function usePageMeta({ title, description }: PageMetaProps) {
	const router = useRoute()
	const fullUrl = `https://kurojifusky.com${router.fullPath}`

	useHead({
		link: [{ rel: "canonical", href: fullUrl }],
	})

	const SITE_NAME = "Kuroji Fusky"
	const parseTitle = router.fullPath === "/" ? title : `${title} - ${SITE_NAME}`

	const metaTags: UseSeoMetaInput = {
		title: parseTitle,
		description: description,
		ogTitle: title,
		ogDescription: description,
		ogType: "website",
		ogUrl: fullUrl,
		twitterTitle: title,
		twitterDescription: description,
		twitterCard: "summary",
		twitterSite: "@kurojifusky",
		twitterCreator: "@kurojifusky",
	}

	useSeoMeta(metaTags)
}
