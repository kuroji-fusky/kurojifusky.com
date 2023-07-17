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

usePageMeta({
  isBlogPost: true,
  title: data?.value?.title,
  description: data?.value?.description,
})

const _img = useImage()

const parseForAnchor = (input: string) => {
  const parseHash = input
    .replace(/\s/g, "-")
    .replace(/"|\(|\)|!|\.|,|\?/g, "")
    .toLocaleLowerCase()

  return parseHash
}

const parseDatBitch = () => {
  // This function is an absolute dumpster fire, it's bad lol
  return {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const img = node.data.target

      if (img.fields) {
        return h("img", {
          src: _img(`https:${img.fields.file.url}`, {
            quality: 75,
            format: "webp",
          }),
          loading: "lazy",
          decoding: "async",
          draggable: false,
        })
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
    [BLOCKS.PARAGRAPH]: (node: any) => {
      return h(
        "p",
        node.content.map((nodeItem: any) => {
          if (nodeItem.nodeType == "text") {
            return nodeItem.value
          }

          if (nodeItem.nodeType === "hyperlink") {
            if (nodeItem.content[0].value === "[yt-embed]") {
              const videoId = nodeItem.data.uri.split("/").at(-1)

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
                })
              )
            }

            // Normal anchor link
            return h(
              "a",
              { href: nodeItem.data.uri, target: "_blank" },
              nodeItem.content[0].value
            )
          }

          return h(
            "span",
            {
              "data-block-debug": JSON.stringify(nodeItem),
            },
            nodeItem.value
          )
        })
      )
    },
  }
}
</script>

<template>
  <main>
    <article itemscope itemtype="">
      <meta itemprop="datePublished" :content="data?.datePublished" />
      <meta itemprop="dateModified" :content="data?.dateModified" />
      <meta itemprop="image" :content="data?.banner" />
      <meta itemprop="publisher" content="blog.kurojifusky.com" />
      <section class="flex flex-col max-w-screen-lg mx-auto py-9 gap-y-3">
        <span>tag</span>
        <h1 itemprop="name headline" class="text-[2.625rem] font-bold">
          {{ data?.title }}
        </h1>
        <p class="text-xl">
          {{ data?.description }}
        </p>
        <NuxtImg
          class="aspect-[16/8] object-cover w-full rounded-md"
          :src="data?.banner"
          sizes="400px md:600px lg:800px"
          :quality="75"
          format="webp"
          draggable="false"
          loading="eager"
          fetchpriority="high"
        />
        <p class="flex gap-4">
          <Timestamp
            prefix="Published on"
            :date="(data?.datePublished as string)"
          />
          <Timestamp
            prefix="Updated on"
            :date="(data?.dateModified as string)"
          />
        </p>
      </section>
      <hr
        class="max-w-screen-xl mx-auto mt-4 border opacity-50 border-kuro-royalblue-400"
      />
      <div class="pt-9">
        <section
          class="mx-auto pb-12 max-w-screen-md prose-p:leading-[1.65rem] prose-p:py-2.5 prose-li:list-disc prose-a:text-kuro-royalblue-400 hover:prose-a:text-kuro-royalblue-300 prose-headings:font-bold"
        >
          <RichTextRenderer
            :document="data?.content"
            :nodeRenderers="parseDatBitch()"
          />
        </section>
      </div>
    </article>
  </main>
</template>
