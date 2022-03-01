<template>
  <main role="main">
    <SkepHeader />
    <AboutMe />
    <Projects />
    <Proficency />
  </main>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

// Lazy load components
const SkepHeader = defineAsyncComponent(() => import('@/components/layouts/SkepHeader.vue'))
const AboutMe = defineAsyncComponent(() => import('@/components/layouts/AboutMe.vue'))
const Projects = defineAsyncComponent(() => import('@/components/layouts/Projects.vue'))
const Proficency = defineAsyncComponent(() => import('@/components/layouts/Proficency.vue'))
</script>