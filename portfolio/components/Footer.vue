<script setup lang="ts">
const footLinks = [
  {
    name: "Branding",
    path: "/branding",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Linktree",
    path: "https://linktr.ee/kurojifusky",
  },
  {
    name: "Source code",
    path: "https://github.com/kuroji-fusky/kurojifusky.com/",
  },
];
</script>

<template>
  <footer class="flex flex-col py-12 px-8 items-center text-sm gap-y-4">
    <NuxtLink to="/" aria-label="Home" title="Home">
      <KuroLogo :width="120" />
    </NuxtLink>
    <div class="flex flex-wrap gap-x-3">
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
