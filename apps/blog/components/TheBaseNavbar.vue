<script setup lang="ts">
import { SearchIcon, MenuIcon } from "lucide-vue-next"

const NAVBAR_ITEMS = ["Updates", "Insights", "Design", "Engineering", "Others"]

const toggleBurger = ref(false)
const notDoneYet = () => {
  alert("Still work-in-progress lol")
}
</script>

<template>
  <header
    class="sticky top-0 z-[5] backdrop-blur-sm transition-colors"
    :class="[
      !toggleBurger
        ? 'bg-kuro-dark2 bg-opacity-[0.75]'
        : 'bg-kuro-lavender-800',
    ]"
  >
    <nav class="flex items-center max-w-screen-xl py-3.5 mx-auto px-9">
      <div class="w-full">
        <NuxtLink href="/" class="inline-flex items-center gap-x-3">
          <NuxtImg src="/favicon.png" width="40" alt="Site icon" />
          <span class="text-[1.65rem] font-bold font-inter">{{ "Blog" }}</span>
        </NuxtLink>
      </div>
      <button
        class="p-2.5 rounded-md hover:bg-kuro-lavender-700 block md:hidden"
        @click="toggleBurger = !toggleBurger"
      >
        <MenuIcon :size="21" />
      </button>
      <ul
        class="absolute px-9 py-4 md:p-0 left-0 flex flex-col w-full gap-y-0.5 md:static md:flex-row top-[4.5rem] md:top-0 bg-kuro-lavender-800 md:bg-transparent justify-end"
        :class="[
          !toggleBurger
            ? 'pointer-events-none md:pointer-events-auto opacity-0 md:opacity-100 transition-opacity'
            : 'opacity-100',
        ]"
      >
        <li
          class="font-medium select-none font-inter"
          v-for="(text, index) in NAVBAR_ITEMS"
          :key="index"
        >
          <NuxtLink
            :to="`/category/${text.toLocaleLowerCase()}`"
            class="block w-full py-2 rounded-md md:w-fit hover:bg-kuro-lavender-700 hover:text-kuro-lavender-100 md:py-2 md:px-3"
          >
            {{ text }}
          </NuxtLink>
        </li>
      </ul>
      <button
        class="ml-3 p-2.5 rounded-md hover:bg-kuro-lavender-700"
        @click="notDoneYet"
      >
        <SearchIcon :size="21" />
      </button>
    </nav>
  </header>
</template>
