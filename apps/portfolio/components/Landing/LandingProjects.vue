<script setup lang="ts">
import { useDynamicColor } from "~/composables/useDynamicColor"
import { featuredProjects as projects } from "~~/constants"

const projectRef = ref<HTMLDivElement | null>()

onMounted(() => {
  const io = new IntersectionObserver((entwies) => {
    entwies.forEach((entwy) => {
      const elIndex = parseInt(
        Object.values((entwy.target as HTMLElement).dataset).toString()
      )

      if (entwy.isIntersecting) {
        useDynamicColor({ bg: projects[elIndex].bg, fg: "white" })
      }
    })
  })

  toRaw(projectRef.value as unknown as HTMLElement[]).forEach((e) => {
    io.observe(e)
  })
})
</script>

<template>
  <div id="featured-projects" class="grid">
    <section
      class="py-[4vw] px-32 h-[115dvh] flex items-center justify-between relative w-full"
      v-for="(item, index) in projects"
      :key="index"
    >
      <article class="grid gap-y-5" ref="projectRef" :data-index="index">
        <h2 class="text-5xl font-bold font-unbounded">{{ item.name }}</h2>
        <p class="text-xl w-[55ch]">
          {{ item.description }}
        </p>
      </article>
      <div
        id="parallax-container"
        class="bg-red-600 h-full w-full grid place-items-center"
        role="presentation"
      >
        Temporary placeholder
      </div>
    </section>
  </div>
</template>
