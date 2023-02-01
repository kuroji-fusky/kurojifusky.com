import { Client } from "@notionhq/client"

interface Tag {
  id: string
  name: string
}

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  cover: string
  tags: Tag[]
  date: string
}
