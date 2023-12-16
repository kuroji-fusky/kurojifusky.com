<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types"

const { path } = useRoute()
const { data } = await useAsyncData("page-data", () =>
  queryContent(path).findOne()
)

const query: QueryBuilderParams = {
  where: [{ _path: { $not: path } }],
  sort: [{ date: 1 }]
}

useTastySEO({
  title: `${data.value?.title} | Kuroji Fusky`,
  description: data.value?.description
})
</script>

<template>
  <main>
    <div class="p-16 flex flex-col gap-y-12">
      <ShowcaseInfocard
        :title="data?.title"
        :date="data?.date"
        :type="data?.type"
      />
      <div class="aspect-[16/8] relative w-full overflow-hidden">
        <div class="absolute inset-0 z-10" />
        <NuxtImg
          provider="cloudinary"
          src="/sf-website/irl/yeseu.png"
          class="absolute inset-0 h-full w-full object-cover"
          draggable="false"
          fetchpriority="high"
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
    <div class="mt-12 mb-2">
      <h1
        class="font-unbounded font-bold text-5xl mx-auto px-8 max-w-screen-xl uppercase"
      >
        More projects
      </h1>
    </div>
    <div
      class="overflow-x-auto overflow-y-hidden w-full grid grid-flow-col py-8 mb-20 mt-4"
    >
      <div class="w-[25rem]"></div>
      <div class="flex items-center gap-x-12">
        <ContentList path="/showcase" v-slot="{ list }" :query="query">
          <div v-for="item in list" :key="item._path">
            <NuxtLink
              :to="item._path"
              class="aspect-[16/8] relative w-[35rem] overflow-hidden block"
            >
              <div class="absolute inset-0 z-10" />
              <NuxtImg
                provider="cloudinary"
                src="/sf-website/irl/yeseu.png"
                class="absolute inset-0 h-full w-full object-cover rounded-xl"
                draggable="false"
                fetchpriority="high"
              />
            </NuxtLink>
            <h2 class="text-3xl my-2 font-bold">
              <NuxtLink :to="item._path">{{ item?.title }}</NuxtLink>
            </h2>
            <span class="text-kuro-lavender-300">{{ item?.date }}</span>
          </div>
        </ContentList>
      </div>
      <div class="w-[25rem]"></div>
    </div>
  </main>
</template>
