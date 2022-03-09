<template>
  <main role="main">
    <SkepHeader />
    <AboutMe />
    <Projects />
    <Proficency />
  </main>
</template>

<script lang="ts">
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'
import { defineAsyncComponent } from 'vue'
import { useMeta } from 'vue-meta'

const homedesc = "Skep's awful portfolio site lol"
const title = "Home"

export default {
  components: {
    SkepHeader: defineAsyncComponent(() => import('@/components/layouts/SkepHeader.vue')),
    AboutMe: defineAsyncComponent(() => import('@/components/layouts/AboutMe.vue')),
    Projects: defineAsyncComponent(() => import('@/components/layouts/Projects.vue')),
    Proficency: defineAsyncComponent(() => import('@/components/layouts/Proficency.vue'))
  },
  setup() {
    useMeta({
      title: title,
      description: homedesc,
      og: {
        title: title,
        description: homedesc,
      },
      twitter: {
        title: title,
        description: homedesc,
      }
    })
  }
}
</script>