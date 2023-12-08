<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData("page-data", () =>
  queryContent(path).findOne(),
)

useTastySEO({
  title: `${data.value?.title} | Kuroji Fusky`,
  description: data.value?.description,
})
</script>

<template>
  <main class="mx-auto max-w-screen-xl px-8">
    <ContentRenderer tag="article" :value="data!">
      <ContentRendererMarkdown
        tag="article"
        class="prose-p:my-3"
        :value="data!"
      />
    </ContentRenderer>
  </main>
</template>
