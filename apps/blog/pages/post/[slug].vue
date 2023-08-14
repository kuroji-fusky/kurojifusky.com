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

const _img = useImage()

usePageMeta({
  isBlogPost: true,
  title: data?.value?.title,
  description: data?.value?.description,
  img: _img(data.value?.banner as string, { width: 630, height: 1280 }),
})

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
      return [
        node.content.map((block: any) => {
          if (
            block.nodeType === "hyperlink" &&
            block.content[0].value === "[yt-embed]"
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
        }),
        h(
          "p",
          node.content.map((block: any) => {
            if (block.nodeType === "hyperlink") {
              return h(
                "a",
                { href: block.data.uri, target: "_blank" },
                block.content[0].value
              )
            }
            if (block.nodeType == "text") {
              return h(
                "span",
                {
                  "data-block-debug": JSON.stringify(block),
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
</script>

<template>
  <main>
    <article
      itemscope
      itemtype="http://schema.org/Article"
      class="px-5 md:px-9"
    >
      <meta itemprop="datePublished" :content="data?.datePublished" />
      <meta itemprop="thumbnailUrl" :content="data?.banner" />
      <meta itemprop="publisher" content="blog.kurojifusky.com" />
      <section
        class="flex flex-col max-w-screen-lg mx-auto py-9 gap-y-3.5 md:gap-y-5"
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
        <p class="text-base md:text-xl" itemprop="description">
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
        class="max-w-screen-xl mx-auto mt-4 border opacity-50 border-kuro-royalblue-400"
      />
      <div
        ref="contentRef"
        class="pt-9 mx-auto max-w-screen-md prose-p:text-[0.96rem] prose-p:leading-[1.45rem] md:prose-p:leading-[1.65rem] prose-p:py-2.5 prose-li:list-disc prose-a:text-kuro-lavender-200 hover:md:prose-a:text-kuro-lavender-400 md:hover:prose-a:underline prose-headings:font-bold prose-blockquote:rounded-md prose-blockquote:px-6 prose-blockquote:border-l-kuro-violet-300 prose-blockquote:border-l-8 prose-blockquote:border-0 prose-blockquote:bg-kuro-violet-700 prose-blockquote:bg-opacity-25 prose-ul:ml-4"
        itemprop="articleBody"
      >
        <RichTextRenderer
          :document="data?.content"
          :nodeRenderers="parseDatBitch()"
        />
      </div>
    </article>
  </main>
</template>
