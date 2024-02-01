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
  <footer class="flex flex-col py-12 px-8 items-center gap-y-6 text-sm">
    <div
      class="px-3.5 py-2 rounded-md flex items-center bg-kuro-yellow-800 bg-opacity-75 gap-x-2 border-2 border-kuro-yellow-800"
    >
      <LucideAlertTriangle />
      <span>Website is still work-in-progress; no mobile support just yet</span>
    </div>
    <NuxtLink to="/" aria-label="Home" title="Home">
      <KuroLogo :width="160" ref="succ" />
    </NuxtLink>
    <div class="opacity-50 flex flex-col items-center gap-y-2">
      Version 9.0
      <span id="copyright">
        {{
          `© 2012-${currentYear} Kerby Keith Aquino dba Kuroji Fusky, LLC & Fusky Labs, LLC`
        }}
      </span>
    </div>
  </footer>
</template>
