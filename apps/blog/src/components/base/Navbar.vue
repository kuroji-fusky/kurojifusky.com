<script setup lang="ts">
import { kebabCase } from "lodash"

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
  <nav class="flex items-center max-w-screen-xl py-4 px-9 mx-auto">
    <div class="flex items-center w-full">Blog</div>
    <ul class="flex items-center w-full justify-end">
      <li v-for="({ name, sublinks }, index) in items" :key="index">
        <a :href="`/${kebabCase(name)}`">
          {{ name }}
        </a>
        <div v-if="sublinks">
          <a
            v-for="({ name }, index) in sublinks"
            :key="index"
            :href="`/category/${kebabCase(name)}`"
            >{{ name }}</a
          >
        </div>
      </li>
    </ul>
  </nav>
</template>
