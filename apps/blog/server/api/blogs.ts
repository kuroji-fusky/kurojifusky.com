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
      "sys.createdAt",
      "sys.updatedAt",
    ],
  })

  return entries.items.map(({ sys, fields }) => {
    const bannerImg = `https:${(fields.banner as any).fields.file.url}`

    const overridePublishDate = fields.overridePublishDate

    return {
      datePublished: overridePublishDate ? overridePublishDate : sys.createdAt,
      dateModified: sys.updatedAt,
      overridePublishDate: fields.overridePublishDate,
      title: fields.title,
      description: fields.description,
      banner: bannerImg,
      slug: fields.slug,
    }
  })
})
