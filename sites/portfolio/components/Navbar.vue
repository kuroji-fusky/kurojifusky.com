<script setup lang="ts">
import { baseUrls } from "@kuro/shared"
</script>

<template>
  <div class="sticky inset-0 bottom-0 z-10">
    <div class="relative">
      <header class="relative z-[9] flex justify-between px-9 py-6">
        <NuxtLink to="/" aria-label="Home" title="Home">
          <KuroLogo :width="150" />
        </NuxtLink>
        <nav class="inline-flex select-none gap-6">
          <KuroLink href="/showcase">Showcase</KuroLink>
          <KuroLink href="/about">About Me</KuroLink>
          <KuroLink :href="baseUrls.blog" external>
            <span class="mr-1">Blog</span>
          </KuroLink>
        </nav>
      </header>
      <div class="from-kuro-dark2 absolute inset-0 -bottom-4 w-full bg-gradient-to-b" />
    </div>
  </div>
</template>
