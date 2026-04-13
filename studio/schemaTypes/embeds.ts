import { defineField, defineType } from "sanity"

export const yootoob = defineType({
  name: "yt-embed",
  title: "YouTube embed",
  description: "Embed a shitty video lol",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (r) => r.required()
    }),
    defineField({
      name: "isShorts",
      title: "Format player as Shorts",
      type: "boolean",
      initialValue: false
    })
  ]
})
