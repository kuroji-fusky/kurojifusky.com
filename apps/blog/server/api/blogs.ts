import client from "./contentful"
import type { BlogPost } from "~/types"

export default defineEventHandler(async () => {
  const entries = await client.getEntries<BlogPost>({
    content_type: "blogPost",
    select: [
      "fields.title",
      "fields.slug",
      "fields.banner",
      "fields.description",
      "fields.content",
    ],
  })

  return entries.items.map(({ fields }) => {
    const bannerImg = `https:${(fields.banner as any).fields.file.url}`

    return {
      title: fields.title,
      description: fields.description,
      banner: bannerImg,
      slug: fields.slug,
    }
  })
})
