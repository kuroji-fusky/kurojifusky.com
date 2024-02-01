<script setup lang="ts">
import { baseUrls } from "@kuro/shared"
</script>

<template>
  <div class="sticky inset-0 bottom-0 z-10">
    <div class="relative">
      <header class="px-9 py-6 flex justify-between relative z-[9]">
        <NuxtLink to="/" aria-label="Home" title="Home">
          <KuroLogo :width="150" />
        </NuxtLink>
        <nav class="inline-flex gap-6 select-none">
          <KuroLink href="/projects">Projects</KuroLink>
          <KuroLink href="/about">About Me</KuroLink>
          <KuroLink :href="baseUrls.blog" external>
            <span class="mr-1">Blog</span>
          </KuroLink>
        </nav>
      </header>
      <div
        class="absolute inset-0 -bottom-4 bg-gradient-to-b from-kuro-dark2 w-full"
      />
    </div>
  </div>
</template>
