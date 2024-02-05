<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"

interface MarkdownMetadata extends MarkdownParsedContent {
  title: string
  description: string
}

const { path } = useRoute()
const { data } = await useAsyncData("page-data", () =>
  queryContent<MarkdownMetadata>(path).findOne()
)

useSEO({
  title: `${data.value!.title} | Kuroji Fusky`,
  description: data.value!.description
})
</script>

<template>
  <main class="mx-auto max-w-screen-xl px-8">
    <ContentRenderer tag="article" :value="data!">
      <ContentRendererMarkdown class="prose-p:my-3" :value="data!" />
    </ContentRenderer>
  </main>
</template>
