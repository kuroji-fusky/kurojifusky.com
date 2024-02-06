<script setup lang="ts">
import { kebabCase } from "lodash-es"
import { ref, onMounted } from "vue"

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
  <div class="bg-kuro-dark2 sticky top-0 z-10 mx-auto max-w-screen-2xl text-lg">
    <header class="flex items-center justify-between px-8 py-4">
      <a href="/" class="flex items-center gap-x-4">
        <span class="font-unbounded text-4xl font-semibold">K</span>
        <div
          class="before:text-kuro-violet-100 flex items-center gap-x-3 text-2xl font-bold before:font-light before:text-opacity-50 before:content-['/']"
        >
          <img src="../../favicon.png" width="40" height="40" alt="" />
          <span aria-hidden="true">Blog</span>
        </div>
      </a>
      <nav class="flex gap-x-3 text-base">
        <a
          v-for="item in navItems"
          :href="!item.link ? kebabCase(item.name) : item.link"
          :target="!item.link ? undefined : '_blank'"
        >
          {{ item.name }}
        </a>
      </nav>
    </header>
  </div>
  <div ref="titleOnIntersectRef" class="bottom-unset absolute inset-0 -z-[1] h-56" />
</template>
