import contentful from "contentful"
import type { Document } from "@contentful/rich-text-types"

const viteEnv = import.meta.env

export interface BlogPost {
	title: string
	date: string
	overridePublishDate: string
	banner: string
	description: string
	content: Document
	slug: string
}

export const contentfulClient = contentful.createClient({
	space: viteEnv.CONTENTFUL_SPACE_ID,
	accessToken: viteEnv.DEV
		? viteEnv.CONTENTFUL_PREVIEW_TOKEN
		: viteEnv.CONTENTFUL_DELIVERY_TOKEN,
	host: viteEnv.DEV ? "preview.contentful.com" : "cdn.contentful.com",
})
