<script setup lang="ts">
import {
  IconGithub,
  IconYoutube,
  IconXTwitter,
  IconMastodon
} from "@iconify-prerendered/vue-fa6-brands"
import type { SVGAttributes, VNode } from "vue"

type IterableLinks = Array<{
  name: string
  icon?: NonNullable<(p?: SVGAttributes) => VNode>
  link: string
}>

const socialLinks: IterableLinks = [
  {
    name: "YouTube",
    icon: IconYoutube,
    link: "https://www.youtube.com/@kurojifusky"
  },
  { name: "GitHub", icon: IconGithub, link: "https://github.com/kuroji-fusky" },
  {
    name: "Mastodon",
    icon: IconMastodon,
    link: "https://furry.engineer/@kurojifusky"
  },
  {
    name: "X, formerly known as Twitter",
    icon: IconXTwitter,
    link: "https://x.com/kurojifusky"
  }
]

const otherLinks: IterableLinks = [
  {
    name: "View source code",
    link: "https://github.com/kuroji-fusky/kurojifusky.com/tree/main/apps/blog"
  },
  { name: "Feed me Ko-fi", link: "https://ko-fi.com/kuroji_fusky" },
  { name: "Mah email", link: "mailto:hello@kurojifusky.com" }
]
</script>

<template>
  <footer class="px-9 max-w-screen-2xl mx-auto flex items-center gap-x-3 py-6">
    <span id="copyright" class="opacity-50"
      >&copy; 2023 Kerby Keith Aquino / Fusky Labs LLC</span
    >
    <div class="flex gap-x-5 ml-auto">
      <a
        v-for="({ name, icon, link }, i) in socialLinks"
        :key="i"
        :href="link"
        :title="name"
        :rel="name !== 'Mastodon' ? 'nofollow noreferrer' : 'me'"
        target="_blank"
        class="hover:text-kuro-lavender-400 transition-colors"
      >
        <component
          :is="(icon as {})"
          height="23px"
          width="23px"
          class="p-0.5"
        />
      </a>
    </div>
    <hr class="h-6 border border-l-kuro-lavender-700 mx-2" />
    <div class="flex gap-x-3.5">
      <a
        v-for="({ name, link }, index) in otherLinks"
        :key="index"
        :href="link"
        target="_blank"
        rel="noreferrer"
        class="hover:underline hover:text-kuro-lavender-400 transition-colors"
      >
        {{ name }}
      </a>
    </div>
  </footer>
</template>
