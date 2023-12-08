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
  <main>
    <div class="p-16 flex flex-col gap-y-12">
      <div class="grid grid-cols-2 row-span-2 gap-4">
        <div class="row-span-2 flex flex-col">
          <span
            class="uppercase font-semi-bold text-opacity-60 text-kuro-violet-100 text-lg"
            aria-hidden
            >Project Title</span
          >
          <span class="font-unbounded text-4xl font-bold">
            {{ data?.title }}
          </span>
        </div>
        <div class="flex flex-col gap-y-1">
          <span
            class="uppercase font-semi-bold text-opacity-60 text-kuro-violet-100 text-lg"
            aria-hidden
            >Type</span
          >
          <span>{{ data?.type }}</span>
        </div>
        <div class="flex flex-col gap-y-1">
          <span
            class="uppercase font-semi-bold text-opacity-60 text-kuro-violet-100 text-lg"
            aria-hidden
            >Date</span
          >
          <span>{{ data?.date }}</span>
        </div>
      </div>
      <div class="aspect-[16/8] relative w-full overflow-hidden">
        <NuxtImg
          provider="cloudinary"
          src="/sf-website/irl/yeseu.png"
          class="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />
      </div>
    </div>

    <ContentRenderer tag="article" :value="data!">
      <ContentRendererMarkdown
        tag="article"
        class="mx-auto max-w-screen-xl px-8 leading-relaxed prose-p:my-4 prose-headings:font-unbounded prose-headings:font-bold prose-headings:my-6 prose-h2:text-4xl"
        :value="data!"
      />
    </ContentRenderer>
  </main>
</template>
