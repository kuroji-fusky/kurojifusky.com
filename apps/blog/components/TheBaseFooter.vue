<script setup lang="ts">
import { SOCIAL_LINKS } from "~/constants/socials"

const copyright = `© 2013-present Kerby Keith Aquino / Fusky Labs LLC`

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
    name: "Feed me caffiene",
    link: "https://ko-fi.com/kuroji_fusky",
  },
  {
    name: "Contact me via email",
    link: "mailto:hello@kurojifusky.com",
  },
]
</script>

<template>
  <footer class="flex flex-col items-center py-5 my-4 text-sm text-center px-9">
    <div class="flex mb-4 gap-7">
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
    <ul class="flex flex-wrap gap-5 py-1">
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
    <p id="copyright" class="pt-3 pb-3.5 opacity-50">{{ copyright }}</p>
  </footer>
</template>
