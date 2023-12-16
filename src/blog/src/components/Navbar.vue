<script setup lang="ts">
import { ref, onMounted } from "vue"
import { kebabCase } from "lodash-es"

const navItems = [
  { name: "Category" },
  { name: "Dream Journal" },
  { name: "About me", link: "https://kurojifusky.com/about-us" }
]

const titleOnIntersectRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const filler = titleOnIntersectRef.value

  const io = new IntersectionObserver(([e]) => console.log(e.isIntersecting))

  io.observe(filler!)
})
</script>

<template>
  <div class="z-10 mx-auto max-w-screen-2xl text-lg sticky top-0 bg-kuro-dark2">
    <header class="flex items-center justify-between px-8 py-4">
      <a href="/" class="flex items-center gap-x-4">
        <span class="font-unbounded font-semibold text-4xl">K</span>
        <div
          class="before:content-['/'] before:font-light before:text-kuro-violet-100 before:text-opacity-50 text-2xl font-bold flex items-center gap-x-3"
        >
          <img src="../../favicon.png" width="40" height="40" alt="" />
          <span aria-hidden="true">Blog</span>
        </div>
      </a>
      <nav class="flex gap-x-3 text-base">
        <a
          v-for="item in navItems"
          role="listitem"
          :href="!item.link ? kebabCase(item.name) : item.link"
          :target="!item.link ? undefined : '_blank'"
        >
          {{ item.name }}
        </a>
      </nav>
    </header>
  </div>
  <div
    ref="titleOnIntersectRef"
    data-route-enable="false"
    class="h-56 absolute inset-0 bottom-unset"
  />
</template>
