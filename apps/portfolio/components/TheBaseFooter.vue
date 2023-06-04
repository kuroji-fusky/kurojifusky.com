<script setup lang="ts">
import {
  IconGithub as gh,
  IconYoutube as yt,
  IconTwitter as twt,
  IconMastodon as md
} from "@iconify-prerendered/vue-fa6-brands"
import { CoffeeIcon as kf } from "lucide-vue-next"

const __socials = [
  {
    link: "https://www.youtube.com/@kurojifusky",
    text: "YouTube",
    icon: yt
  },
  {
    link: "https://github.com/kuroji-fusky",
    text: "GitHub",
    icon: gh
  },
  {
    link: "https://furry.engineer/@kurojifusky",
    text: "Mastodon",
    rel: "me",
    icon: md
  },
  {
    link: "https://twitter.com/kurojifusky",
    text: "Twitter",
    icon: twt
  },
  {
    link: "https://ko-fi.com/kuroji_fusky",
    text: "Ko-fi",
    icon: kf
  }
]
</script>

<template>
  <footer class="mx-auto max-w-screen-xl px-12">
    <div role="list" class="flex gap-x-8 justify-center">
      <NuxtLink
        v-for="{ link, text, icon, rel } in __socials"
        :to="link"
        :title="text"
        :rel="!!rel ? 'me' : 'noopener'"
        target="_blank"
      >
        <component :is="icon" width="20" height="20" />
      </NuxtLink>
    </div>
  </footer>
</template>
