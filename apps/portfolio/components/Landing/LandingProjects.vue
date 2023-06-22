<template>
  <div ref="wrapperRef" class="grid">
    <section
      class="py-[4vw] px-32 h-[100dvh] flex items-center justify-between relative w-full"
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
        class="h-full w-full grid place-items-center"
        role="presentation"
      >
        Temporary placeholder
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { featuredProjects as projects } from "~~/constants"

const projectRef = ref<HTMLElement>()
const wrapperRef = ref<HTMLElement>()

onMounted(() => {
  const projectItemObserver = new IntersectionObserver(
    (entwies) => {
      entwies.forEach(({ target, isIntersecting }) => {
        const elIndex = parseInt(
          Object.values((target as HTMLElement).dataset).toString()
        )

        if (isIntersecting) {
          useDynamicColor({
            bg: projects[elIndex].bg,
            fg: projects[elIndex].fg
          })
        }
      })
    },
    { threshold: 0.33 }
  )

  toRaw(projectRef.value as unknown as HTMLElement[]).forEach((e) => {
    projectItemObserver.observe(e)
  })

  const wrapperObserver = new IntersectionObserver(
    (entwies) => {
      entwies.forEach(({ isIntersecting }) => {
        if (!isIntersecting) {
          useDynamicColor({ bg: "", fg: "" })
        }
      })
    },
    { threshold: 0.15 }
  )

  wrapperObserver.observe(wrapperRef.value!)
})
</script>
