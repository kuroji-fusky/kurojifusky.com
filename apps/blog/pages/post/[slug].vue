<script setup lang="ts">
import RichTextRenderer from "contentful-rich-text-vue-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { BlogPost } from "types"

const { slug } = useRoute().params
const { data } = await useFetch<Required<BlogPost["fields"]>>(
  `/api/blog/${slug}`,
  {
    key: slug as string,
  }
)

if (!data.value)
  throw createError({
    statusCode: 404,
    statusMessage: "Your mom not found",
    fatal: true,
  })

const _img = useImage()
const headlineBanner = _img(data.value?.banner as string, {
  height: 1280,
  width: 630,
})

usePageMeta({
  isBlogPost: true,
  title: data?.value?.title,
  description: data?.value?.description,
  img: headlineBanner,
})

const parseForAnchor = (input: string) => {
  const parseHash = input
    .replace(/\s/g, "-")
    .replace(/"|\(|\)|!|\.|,|\?/g, "")
    .toLocaleLowerCase()

  return parseHash
}

const parseDatBitch = () => {
  const ytEmbedString = "[yt-embed]"
  const tweetEmbedString = "[tweet-embed]"

  // This function is an absolute dumpster fire, it's bad lol
  return {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const img = node.data.target
      if (img.fields) {
        return h("img", { class: "py-8", src: `https:${img.fields.file.url}` })
      }
    },
    [BLOCKS.HEADING_2]: (node: any) => {
      const headingText: string = node.content[0].value
      return h(
        "h2",
        {
          id: parseForAnchor(headingText),
          class: "my-3.5 group flex text-3xl",
        },
        headingText
      )
    },
    [BLOCKS.HEADING_3]: (node: any) => {
      const headingText: string = node.content[0].value
      return h(
        "h3",
        {
          id: parseForAnchor(headingText),
          class: "my-2 group flex text-2xl",
        },
        headingText
      )
    },
    [BLOCKS.PARAGRAPH]: (node: any) => {
      return [
        node.content.map((block: any) => {
          if (
            block.nodeType === "hyperlink" &&
            block.content[0].value === ytEmbedString
          ) {
            const videoId = block.data.uri.split("/").at(-1)

            return h(
              "div",
              {
                class: "grid place-items-center py-4 select-none",
                "data-embed-id": videoId,
              },
              h("iframe", {
                class: "aspect-video w-full rounded-md overflow-hidden",
                src: `https://www.youtube-nocookie.com/embed/${videoId}`,
                frameborder: 0,
                allow: "clipboard-write; encrypted-media; web-share",
                allowfullscreen: false,
              })
            )
          }

          if (
            block.nodeType === "hyperlink" &&
            block.content[0].value === tweetEmbedString
          ) {
            return [
              h(
                "div",
                {
                  class: "twitter-tweet",
                  "data-dnt": "true",
                  "data-theme": "dark",
                },
                h("a", { href: block.value })
              ),
            ]
          }
        }),
        h(
          "p",
          node.content.map((block: any) => {
            if (block.nodeType === "hyperlink") {
              if (block.content[0].value === ytEmbedString) return
              if (block.content[0].value === tweetEmbedString) return

              return h(
                "a",
                { href: block.data.uri, target: "_blank" },
                block.content[0].value
              )
            }
            if (block.nodeType == "text") {
              if (block.marks.length === 0) {
                return block.value
              }

              if (
                JSON.stringify(block.marks) ===
                `[{"type":"bold"},{"type":"underline"}]`
              ) {
                return h("strong", { class: "underline" }, block.value)
              }
              if (JSON.stringify(block.marks) === `[{"type":"bold"}]`) {
                return h("strong", {}, block.value)
              }
              if (JSON.stringify(block.marks) === `[{"type":"italic"}]`) {
                return h("em", {}, block.value)
              }

              return h(
                "span",
                {
                  "data-block-debug": JSON.stringify(block.marks),
                },
                block.value
              )
            }
          })
        ),
      ]
    },
  }
}

const contentRef = ref()

onMounted(() => {
  const contentChildNodes = (contentRef.value as HTMLElement).childNodes
  Array.from(contentChildNodes)
    .filter((node) => node.nodeType === 8)
    .forEach((commentNodes) => {
      commentNodes.remove()
    })
})

useSchemaOrg([
  definePerson({
    name: "Kuroji Fusky",
    image: "/favicon.png",
    sameAs: [
      "https://github.com/kuroji-fusky",
      "https://youtube.com/@kurojifusky",
    ],
  }),
  defineArticle({
    headline: data?.value?.title,
    image: [headlineBanner],
  }),
  defineWebPage(),
])
</script>

<template>
  <main>
    <article class="px-5 md:px-9">
      <section
        class="flex flex-col max-w-screen-lg mx-auto pt-6 px-4 gap-y-3.5 md:gap-y-5"
      >
        <div
          class="flex gap-2.5 items-start md:items-center flex-col md:flex-row"
        >
          <div class="flex gap-2.5 items-center">
            <NuxtLink
              class="px-3.5 py-1 text-sm rounded-3xl bg-kuro-lavender-800 hover:bg-kuro-lavender-900"
              v-for="name in data!.category"
              :to="`/category/${name.toLowerCase()}`"
              >{{ name }}</NuxtLink
            >
          </div>
          <Timestamp
            class="w-full mt-2 text-sm md:m-0 opacity-60"
            prefix="Published on"
            :date="(data?.datePublished as string)"
          />
        </div>
        <h1
          itemprop="name headline"
          class="text-3xl md:text-[2.625rem] font-extrabold font-inter"
        >
          {{ data?.title }}
        </h1>
        <p class="text-base md:text-xl">
          {{ data?.description }}
        </p>
        <NuxtImg
          class="aspect-[16/8] object-cover w-full rounded-md"
          :src="data?.banner"
          sizes="400px md:800px lg:1400px"
          quality="80"
          format="webp"
          draggable="false"
          loading="eager"
          fetchpriority="high"
        />
      </section>
      <hr
        class="max-w-screen-xl mx-auto my-10 border opacity-50 border-kuro-royalblue-400"
      />
      <div
        ref="contentRef"
        id="ctf-renderer"
        class="max-w-screen-lg px-4 mx-auto md:px-8"
      >
        <RichTextRenderer
          :document="data?.content"
          :nodeRenderers="parseDatBitch()"
        />
      </div>
    </article>
  </main>
</template>

<style lang="scss">
#ctf-renderer {
  p {
    @apply leading-[1.66rem];
  }

  > p {
    @apply py-2;
  }

  ul {
    @apply grid gap-y-3;
  }

  li {
    @apply ml-5 list-disc;
  }

  li p,
  > blockquote p {
    @apply py-1;
  }

  blockquote {
    @apply my-4 bg-gradient-to-b bg-kuro-lavender-900 bg-opacity-50 py-3.5 pl-8 pr-5 relative overflow-hidden rounded-md;

    &::after {
      content: "";
      @apply absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-kuro-pale-400 to-kuro-violet-600;
    }
  }

  a {
    @apply text-kuro-lavender-200 hover:text-kuro-lavender-400 hover:underline hover:underline-offset-2;
  }
}
</style>
