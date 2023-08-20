<script setup lang="ts">
import type { BlogPost } from "~/types"

const { data: latestPostsData } = await useFetch<{
  [iterable: string]: Omit<BlogPost["fields"], "content">
}>("/api/blogs")

usePageMeta({
  title: "The Kuroji Fusky Blog",
  description: "A place where I complain and nerd things",
})

useSchemaOrg([defineWebSite(), defineWebPage()])
</script>

<template>
  <main class="flex justify-center">
    <section class="mx-auto max-w-screen-2xl px-9">
      <h1 class="my-1.5 text-4xl font-bold font-inter">
        Fresh from the source
      </h1>
      <p>Browse the latest and greatest</p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0.5 lg:gap-5"
      >
        <BlogCard
          v-for="(
            { title, banner, slug, datePublished, category }, index
          ) of latestPostsData"
          :key="index"
          :title="title"
          :banner="banner"
          :slug="slug"
          :date="datePublished"
          :category="(category as string[])"
        />
      </div>
    </section>
  </main>
</template>
