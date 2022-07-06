<template>
  <main class="content-wrapper">
    Lame sauce, this page is still under construction, check back later lol
    <div id="responsive-grid">
      <ProjectItem
        v-for="proj in projects"
        :key="proj.title"
        :title="proj.title"
        :description="proj.description"
        :icon="proj.techStack"
        :githubRepo="proj.githubRepo"
        :websiteUrl="proj.websiteUrl"
        :image="proj.img"
      />
    </div>
  </main>
</template>

<script setup>
import { projects } from "~~/models/Content"

definePageMeta({
  title: "Projects",
  description: "skepfusky projects",
})
</script>

<style scoped>
#responsive-grid {
  @apply grid gap-4;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
}
</style>
