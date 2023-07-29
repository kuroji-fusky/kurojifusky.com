<script setup lang="ts">
import { SOCIAL_LINKS } from "~/constants/socials"

const currentYear = new Date().getFullYear()
const copyright = `© 2013-${currentYear} Kerby Keith Aquino / Fusky Labs LLC`

const EXT_LINKS = [
  {
    name: "View source code",
    link: "https://github.com/kuroji-fusky/kurojifusky.com/tree/main/apps/blog",
  },
  {
    name: "Portfolio",
    link: "https://kurojifusky.com",
  },
  {
    name: "Support me on Ko-fi",
    link: "https://ko-fi.com/kuroji_fusky",
  },
]
</script>

<template>
  <footer class="flex flex-col items-center py-5 text-sm text-center px-9">
    <div class="flex gap-8 mb-7">
      <NuxtLink
        v-for="(item, index) in SOCIAL_LINKS"
        :key="index"
        :to="item.link"
        :title="item.name"
        :rel="item.name === 'Mastodon' ? 'me' : undefined"
        target="_blank"
      >
        <component :is="item.icon" width="19" height="19" />
      </NuxtLink>
    </div>
    <ul class="flex gap-3 py-2.5">
      <li v-for="(item, index) in EXT_LINKS" :key="index">
        <NuxtLink
          :to="item.link"
          target="_blank"
          external
          class="text-kuro-lavender-200 hover:text-kuro-lavender-400 hover:underline"
          >{{ item.name }}</NuxtLink
        >
      </li>
    </ul>
    <p class="text-xs opacity-60">
      Written in Nuxt 3, Tailwind CSS, and Contentful
    </p>
    <p id="copyright" class="pt-3 pb-3.5">{{ copyright }}</p>
  </footer>
</template>
