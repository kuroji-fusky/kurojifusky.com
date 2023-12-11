<script setup lang="ts">
import { baseUrls } from "@kuro/shared"

const footLinks = [
  {
    name: "Branding",
    path: "/branding",
  },
  {
    name: "Blog",
    path: baseUrls.blog,
  },
  {
    name: "Linktree",
    path: "https://linktr.ee/kurojifusky",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]
</script>

<template>
  <footer class="flex flex-col py-12 px-8 items-center text-base gap-y-6">
    <NuxtLink to="/" aria-label="Home" title="Home">
      <KuroLogo :width="160" ref="succ" />
    </NuxtLink>
    <div class="flex flex-wrap gap-x-8">
      <KuroLink
        v-for="(link, index) in footLinks"
        :key="index"
        :href="link.path"
        :external="link.path.startsWith('https:')"
      >
        {{ link.name }}
      </KuroLink>
    </div>
    <span id="copyright">&copy; 2023 Kerby Keith Aquino</span>
  </footer>
</template>
