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
    <section class="mx-auto max-w-screen-2xl px-9">
      <h1 class="my-3 text-3xl font-bold font-inter">Latest posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
        <BlogCard
          v-for="({ title, banner, slug, datePublished }, index) of data"
          :key="index"
          :title="title"
          :banner="banner"
          :slug="slug"
          :date="datePublished"
        />
      </div>
    </section>
  </div>
</template>
