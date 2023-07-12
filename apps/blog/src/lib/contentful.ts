import contentful from "contentful"

export type FixConstraints<T> = T & {
  fields: T
  contentTypeId: string
}

export interface BlogPost {
  title: string
  date: string
  overridePublishDate: string
  banner: {
    fields: {
      title: string | unknown
      file: { url: string }
    }
  }
  description: string
  content: Document | string
  slug: string
}

const viteEnv = import.meta.env

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: viteEnv.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com"
})
