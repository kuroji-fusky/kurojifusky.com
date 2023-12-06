<script setup lang="ts">
const topNavMenus = [
  { path: "/projects", name: "Projects" },
  { path: "/portfolio", name: "Other works" },
  { path: "https://blog.kurojifusky.com/", name: "Blog" },
  { path: "/about", name: "About me" },
];
</script>

<template>
  <header class="sticky inset-0 bottom-0 z-10">
    <div class="relative">
      <nav class="px-8 py-5 flex justify-between relative z-[5]">
        <NuxtLink to="/" aria-label="Home" title="Home">
          <KuroLogo :width="150" />
        </NuxtLink>
        <div class="flex items-center text-base gap-x-8">
          <div class="flex items-center gap-x-4 select-none">
            <NuxtLink
              v-for="(link, index) in topNavMenus"
              :key="index"
              :target="link.path.startsWith('https:') ? '_blank' : null"
              :to="link.path"
            >
              <span>{{ link.name }}</span>
            </NuxtLink>
          </div>
          <button>
            <LucideMenu />
          </button>
        </div>
      </nav>
      <div
        class="absolute inset-0 bg-kuro-lavender-900 bg-opacity-25 backdrop-blur-sm"
      />
    </div>
  </header>
</template>
