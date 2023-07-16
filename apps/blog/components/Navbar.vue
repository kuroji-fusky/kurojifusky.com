<script setup lang="ts">
const NAVBAR_ITEMS = ["Engineering", "Updates", "Others"]
</script>

<template>
  <header class="sticky top-0 mb-3 z-[5] bg-opacity-[0.75] bg-kuro-dark2 backdrop-blur-sm">
    <nav class="flex items-center justify-between max-w-screen-xl py-5 mx-auto">
      <NuxtLink href="/">kuro blog logo</NuxtLink>
      <ol class="flex gap-5">
        <li
          class="text-lg font-semibold select-none font-inter"
          v-for="(text, index) in NAVBAR_ITEMS"
          :key="index"
        >
          <NuxtLink :to="`/${text.toLocaleLowerCase()}`">
            {{ text }}
          </NuxtLink>
        </li>
        <li class="relative group">
          <span class="text-lg font-semibold select-none font-inter">
            About Me
          </span>
          <div
            class="absolute right-0 pt-10 transition-all translate-y-0.5 rounded-md opacity-0 pointer-events-none top-5 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
          >
            <div class="relative px-4 py-2.5 rounded-lg bg-kuro-dark1 -top-3.5">
              lmao
            </div>
          </div>
        </li>
      </ol>
    </nav>
  </header>
</template>
