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
      "fields.overridePublishDate",
      "fields.category",
      "sys.createdAt",
      "sys.updatedAt",
    ],
    limit: 20,
  })

  return entries.items.map(({ sys, fields, metadata }) => {
    const bannerImg = `https:${(fields.banner as any).fields.file.url}`

    const overridePublishDate = fields.overridePublishDate

    return {
      datePublished: overridePublishDate
        ? new Date(overridePublishDate).toISOString()
        : sys.createdAt,
      dateModified: sys.updatedAt,
      category: fields.category,
      title: fields.title,
      description: fields.description,
      banner: bannerImg,
      slug: fields.slug,
    }
  })
})
