<script setup lang="ts">
import { featuredProjects } from "~~/constants"
</script>

<template>
  <section id="featured-projects" class="grid">
    <div
      class="py-[4vw] px-32 h-[115dvh] flex items-center justify-between relative w-full"
      v-for="item in featuredProjects"
    >
      <article class="grid gap-y-5">
        <h2 class="text-5xl font-bold font-unbounded">{{ item.name }}</h2>
        <p class="text-xl w-[50ch]">
          {{ item.description }}
        </p>
      </article>
      <div
        id="parallax-container"
        class="bg-red-600 h-full"
        role="presentation"
      >
        Temporary placeholder
      </div>
    </div>
  </section>
</template>
