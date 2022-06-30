<script setup lang="ts">
import { projects } from "../models/Content"
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <TBA />
    <h2 class="p-3">Dev projects</h2>
    <div class="grid gap-4 grid-cols-3 p-3">
      <ContentItem
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :img="project.img"
        :github-link="project.githubLink"
      />
    </div>
    <BaseHead title="Projects" description="Dev projects" />
  </div>
</template>
