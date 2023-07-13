<script setup lang="ts">
import type { BlogPost } from "~/types"

interface BlogPostsClient {
  [iterable: string]: Omit<BlogPost["fields"], "content">
}

const { data } = await useFetch<BlogPostsClient>("/api/blogs")
</script>

<template>
  <div class="flex justify-center mt-20">
    <div v-for="(item, index) of data" :key="index">
      <NuxtLink :to="`/post/${item.slug}`">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <NuxtImg
          :src="item.banner"
          width="500"
          height="300"
          format="webp"
          decoding="async"
          loading="eager"
          quality="69"
        />
      </NuxtLink>
    </div>
  </div>
</template>
