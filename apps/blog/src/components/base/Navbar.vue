<script setup lang="ts">
import kLogo from "../k-logo.vue"

const categories = [
  "Insights",
  "Updates",
  "Design",
  "Engineering",
  "Others",
  "Music"
]
</script>

<template>
  <header class="bg-kuro-dark1 sticky top-0">
    <nav class="flex items-center max-w-screen-2xl py-4 px-9 mx-auto">
      <div class="flex items-center w-full gap-x-3.5">
        <kLogo class="cursor-pointer" />
        <span class="text-2xl opacity-50 select-none">/</span>
        <div class="relative flex items-center">
          <a
            id="shelf-blog"
            href="/"
            class="inline-flex gap-x-3.5 items-center font-bold text-3xl"
          >
            <img
              src="/favicon.png"
              alt="Kuroji drawn by MintyChipMocha"
              width="33px"
              class="aspect-square"
            />
            Blog
          </a>
        </div>
      </div>
      <div class="flex items-center w-full justify-end text-[1.025rem]">
        <span class="group px-3.5 py-2.5 rounded-md relative select-none hover:bg-kuro-lavender-700 hover:bg-opacity-50">
          Category
          <div
            class="py-3 group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-events-none absolute left-0 top-10"
          >
            <div class="bg-kuro-dark2 p-2 grid rounded-md border border-kuro-violet-600">
              <a
                v-for="(item, index) in categories"
                :key="index"
                :href="`/category/${item.toLocaleLowerCase()}`"
                class="px-3 py-2.5 hover:bg-kuro-lavender-600 hover:bg-opacity-75 rounded-md"
              >
                {{ item }}
              </a>
            </div>
          </div>
        </span>
        <a href="/about-me" class="px-3.5 py-2.5 rounded-md relative select-none hover:bg-kuro-lavender-700 hover:bg-opacity-50">
          About me
        </a>
      </div>
    </nav>
  </header>
</template>
