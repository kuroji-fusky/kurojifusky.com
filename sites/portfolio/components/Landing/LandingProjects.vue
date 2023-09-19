<script setup lang="ts">
import { gsap } from "gsap"
import { featuredProjects as projects } from "~~/constants"

const projectRef = ref<HTMLElement>()
const wrapperRef = ref<HTMLElement>()

const gsapSectionRef = ref<HTMLElement>()

onMounted(() => {
  const _projectItemObserverEntry = (entwies: IntersectionObserverEntry[]) => {
    entwies.forEach(({ target, isIntersecting }) => {
      // prettier-ignore
      const elIndex = Object.values((target as HTMLElement).dataset).toString()
      const projectIndex = projects[parseInt(elIndex)]

      if (isIntersecting)
        useDynamicColor({
          bg: projectIndex.bg,
          fg: projectIndex.fg
        })
    })
  }

  const _wrapperObserverEntry = (entwies: IntersectionObserverEntry[]) => {
    entwies.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        useDynamicColor({ bg: "", fg: "" })
      }
    })
  }

  const projectItemObserver = new IntersectionObserver(
    _projectItemObserverEntry,
    { threshold: 0.33 }
  )
  const wrapperObserver = new IntersectionObserver(_wrapperObserverEntry, {
    threshold: 0.15
  })

  toRaw(projectRef.value as unknown as HTMLElement[]).forEach((e) => {
    projectItemObserver.observe(e)
  })

  wrapperObserver.observe(wrapperRef.value!)
})

// useGsap(gsapSectionRef.value, (self) => {})
</script>

<template>
  <div ref="wrapperRef" class="grid">
    <section
      ref="gsapSectionRef"
      class="py-[4vw] px-32 h-[102.5dvh] flex items-center justify-between relative w-full"
      v-for="(item, index) in projects"
      :key="index"
    >
      <article class="grid gap-y-5" ref="projectRef" :data-index="index">
        <h2 class="text-6xl font-bold font-unbounded w-[12ch]">
          {{ item.name }}
        </h2>
        <h3 class="text-xl uppercase opacity-75">
          {{ item.type }}
          <NuxtLink
            :to="`/projects/${useSluggy(item.name)}`"
            class="underline"
            >{{ item.name }}</NuxtLink
          >
        </h3>
        <p class="text-2xl">
          {{ item.description }}
        </p>
      </article>
      <div
        id="parallax-container"
        class="grid w-full h-full place-items-center"
        role="presentation"
      >
        <div id="cropper" class="desktop-lg">Parallax placeholder</div>
        <div class="mobile-only">
          Temporary image placeholder for mobile users
        </div>
      </div>
    </section>
  </div>
</template>
