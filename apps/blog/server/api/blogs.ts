import client from "./contentful"
import type { BlogPost } from "~/types"

export default defineEventHandler(async (event) => {
  const { category: categoryParam, limit: limitParam } = getQuery(event)

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
    ],
    limit: (limitParam as number) || 20,
  })

  // Get all the entries
  const listedEntries = entries.items.map(({ sys, fields }) => {
    const bannerImg = `https:${(fields.banner as any).fields.file.url}`
    const overridePublishDate = fields.overridePublishDate

    return {
      datePublished: overridePublishDate
        ? new Date(overridePublishDate).toISOString()
        : sys.createdAt,
      category: fields.category as string[],
      title: fields.title as string,
      description: fields.description as string,
      banner: bannerImg as string,
      slug: fields.slug as string,
    }
  })

  // Filter entries the entries if the `category` param is present
  const entriesFilter = listedEntries.filter((blogItems) => {
    const toLoweredBlogItems = blogItems.category.map((item) =>
      item.toLowerCase()
    )

    return categoryParam
      ? toLoweredBlogItems.includes(categoryParam as string)
      : blogItems
  })

  // Sort the posts by latest date
  return entriesFilter.sort(
    (a, b) =>
      (new Date(b.datePublished) as any) - (new Date(a.datePublished) as any)
  )
})
