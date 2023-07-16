<script setup lang="ts">
import type { BlogPost } from "~/types"

const { data } = await useFetch<{
  [iterable: string]: Omit<BlogPost["fields"], "content">
}>("/api/blogs")

usePageMeta({
  title: "The Kuroji Fusky Blog",
  description: "A place where I complain and nerd things",
})
</script>

<template>
  <div class="flex justify-center mt-20">
    <div class="max-w-screen-2xl grid grid-cols-3 gap-1.5">
      <div
        v-for="(item, index) of data"
        :key="index"
        class="flex flex-col px-5 py-6 border rounded-lg gap-y-2 border-kuro-lavender-700"
      >
        <NuxtLink :to="`/post/${item.slug}`">
          <NuxtImg
            :src="item.banner"
            class="aspect-[16/8] w-full object-cover rounded-lg"
            sizes="300px lg:500px"
            format="webp"
            decoding="async"
            loading="eager"
            quality="69"
            preload
          />
        </NuxtLink>
        <NuxtLink
          :to="`/post/${item.slug}`"
          class="py-1.5 text-[1.725rem] font-bold font-inter"
        >
          {{ item.title }}
        </NuxtLink>
        <div class="flex gap-x-3.5">
          <p>tag</p>
          <time class="opacity-75 line-clamp-3">date</time>
        </div>
      </div>
    </div>
  </div>
</template>
