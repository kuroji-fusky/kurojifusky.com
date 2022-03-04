<template>
  <main role="main">
    <SkepHeader />
    <AboutMe />
    <Projects />
    <Proficency />
  </main>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
import { useMeta } from 'vue-meta'

export default {
  components: {
    SkepHeader: defineAsyncComponent(() => import('@/components/layouts/SkepHeader.vue')),
    AboutMe: defineAsyncComponent(() => import('@/components/layouts/AboutMe.vue')),
    Projects: defineAsyncComponent(() => import('@/components/layouts/Projects.vue')),
    Proficency: defineAsyncComponent(() => import('@/components/layouts/Proficency.vue'))
  },
  setup() {
    useMeta({
      meta: [
        { vmid: 'ogdes', property: 'og:description', content: 'Homie page' },
      ]
    })
  }
}
</script>