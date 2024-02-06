<script setup lang="ts">
import { baseUrls } from "@kuro/shared"

const footLinks = [
  {
    name: "Blog",
    path: baseUrls.blog
  },
  {
    name: "Linktree",
    path: "https://linktr.ee/kurojifusky"
  }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="flex flex-col items-center gap-y-6 px-8 py-12 text-sm">
    <div
      class="bg-kuro-yellow-800 border-kuro-yellow-800 flex items-center gap-x-2 rounded-md border-2 bg-opacity-75 px-3.5 py-2"
    >
      <LucideAlertTriangle />
      <span>Website is still work-in-progress; no mobile support just yet</span>
    </div>
    <NuxtLink to="/" aria-label="Home" title="Home">
      <KuroLogo :width="160" ref="succ" />
    </NuxtLink>
    <div class="flex flex-col items-center gap-y-2 opacity-50">
      Version 9.0
      <span id="copyright">
        {{ `© 2012-${currentYear} Kerby Keith Aquino dba Kuroji Fusky, LLC & Fusky Labs, LLC` }}
      </span>
    </div>
  </footer>
</template>
