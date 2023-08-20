<script setup lang="ts">
import { BlogPost } from "types"

const route = useRoute()

const { category: categParam } = route.params
const { data } = await useFetch<{
  [iterable: string]: Omit<BlogPost["fields"], "content" | "_categoryLower">
}>(`/api/blogs?category=${categParam}`, {
  key: categParam as string,
})

const capitalizeFirstLetter = (categParam as string).charAt(0).toUpperCase()

const categoryTitle = `${capitalizeFirstLetter}${(categParam as string).slice(
  1
)}`

usePageMeta({
  title: categoryTitle,
  description: `from the ${categoryTitle} category`,
})

useSchemaOrg([defineWebSite(), defineWebPage()])
</script>

<template>
  <main class="min-h-screen">
    <div
      class="pb-20 -mt-20 pt-36 bg-gradient-to-br from-kuro-violet-800 rounded-bl-2xl rounded-br-2xl to-kuro-royalblue-800"
    >
      <h1 class="max-w-screen-xl px-8 mx-auto text-4xl font-bold lg:text-5xl">
        {{ categoryTitle }}
      </h1>
    </div>
    <div
      v-if="(data as any).length !== 0"
      class="grid max-w-screen-xl gap-4 px-4 mx-auto mt-12"
    >
      <NuxtLink
        :key="index"
        v-for="(
          { banner, description, title, datePublished, slug }, index
        ) of data"
        :to="`/post/${slug}`"
        class="flex flex-col gap-4 px-1.5 lg:px-4 py-4 transition-colors rounded-lg lg:flex-row lg:hover:bg-opacity-50 lg:hover:bg-kuro-lavender-800"
      >
        <NuxtImg
          :src="banner"
          class="aspect-[16/8] object-cover rounded-md w-full lg:w-[350px]"
          :quality="75"
          sizes="200px lg:500px"
          format="webp"
          loading="lazy"
          decoding="async"
        />
        <div class="flex flex-col gap-y-1">
          <h2 class="text-3xl font-bold">{{ title }}</h2>
          <p class="h-full">{{ description }}</p>
          <Timestamp class="opacity-75" :date="(datePublished as string)" />
        </div>
      </NuxtLink>
    </div>
    <div v-else>
      I got nothing here... just yet! I'll be publishing some new content soon!
    </div>
  </main>
</template>
