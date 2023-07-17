import type { BlogPost } from "~/types"
import client from "../contentful"

export default defineEventHandler(async ({ context }) => {
  const { slug } = context.params as { [param: string]: string }

  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  })

  const { sys, fields, metadata } = entries.items[0] as unknown as BlogPost & {
    sys: {
      createdAt: string
      updatedAt: string
    }
    metadata: {
      tags: Array<{
        sys: {
          id: string
        }
      }>
    }
  }

  const overridePublishDate = fields.overridePublishDate
  const category = metadata.tags[0].sys.id

  return {
    datePublished: overridePublishDate ? overridePublishDate : sys.createdAt,
    dateModified: sys.updatedAt,
    title: fields.title,
    description: fields.description,
    category: category,
    tags: fields.metaTags,
    banner: `https:${fields.banner.fields.file.url}`,
    content: fields.content,
  }
})
