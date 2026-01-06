import { defineField, defineType } from "sanity"

export const blogType = defineType({
  name: "blog",
  title: "Blog Deez Nuts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Blog title",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (r) => r.required(),
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200)
      }
    }),
    defineField({
      name: "category",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required(),
      options: {
        layout: "grid",
        list: [
          { value: "others", title: "Others" },
          { value: "updates", title: "Updates" },
          {
            value: "design-engineering",
            title: "Design & Engineering"
          }
        ],
        disableActions: [
          "addAfter",
          "addBefore",
          "duplicate"
        ]
      }
    }),
    defineField({
      name: "publishDate",
      title: "Published at",
      validation: (r) => r.required(),
      initialValue: () =>
        new Date().toISOString().slice(0, 10),
      type: "date"
    }),
    defineField({
      name: "isSearchEngineIndex",
      title: "Is indexed by search engines?",
      type: "boolean",
      initialValue: false
    }),

    defineField({
      name: "contents",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: []
          }
        },
        { type: "yt-embed" }
      ],
      validation: (r) => r.required()
    })
  ]
})


export const dweamJournal = defineType({
  name: "dream_journal",
  title: "Dream Journal entry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Entry title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (r) => r.required(),
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200)
      }
    }),

    defineField({
      name: "publishDate",
      title: "Published at",
      validation: (r) => r.required(),
      initialValue: () =>
        new Date().toISOString().slice(0, 10),
      type: "date"
    }),

    defineField({
      name: "contents",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: []
          }
        },
        { type: "yt-embed" }
      ],
      validation: (r) => r.required()
    })
  ]
})