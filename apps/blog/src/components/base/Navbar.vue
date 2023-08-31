<script setup lang="ts">
import kLogo from "../k-logo.vue"
import { kebabCase } from "lodash-es"

const items = [
  {
    name: "Categories",
    sublinks: [
      { name: "Insights" },
      { name: "Updates" },
      { name: "Design" },
      { name: "Engineering" },
      { name: "Music" },
      { name: "Others" }
    ]
  },
  {
    name: "About me"
  }
]
</script>

<template>
  <header class="bg-kuro-dark1 sticky top-0">
    <nav class="flex items-center max-w-screen-2xl py-5 px-9 mx-auto">
      <div class="flex items-center w-full gap-x-3.5">
        <kLogo class="cursor-pointer" />
        <span class="text-2xl opacity-50 select-none" aria-hidden="true"
          >/</span
        >
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
      <ul class="flex items-center w-full justify-end">
        <li v-for="({ name, sublinks }, index) in items" :key="index">
          <a
            :href="`/${kebabCase(name)}`"
            class="group px-3 py-2.5 block relative"
          >
            <span class="text-lg">
              {{ name }}
            </span>
            <div
              v-if="sublinks"
              class="group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-events-none absolute top-10 grid"
            >
              <a
                v-for="({ name }, index) in sublinks"
                :key="index"
                :href="`/category/${kebabCase(name)}`"
                >{{ name }}</a
              >
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
