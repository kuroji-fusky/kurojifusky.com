<script setup lang="ts"></script>

<template>
  <div class="sticky inset-0 bottom-0 z-10">
    <div class="relative">
      <header class="px-9 py-6 flex justify-between relative z-[9]">
        <NuxtLink to="/" aria-label="Home" title="Home">
          <KuroLogo :width="150" />
        </NuxtLink>
        <nav class="inline-flex gap-5">
          <KuroLink href="/about">About me</KuroLink>
          <KuroLink href="https://blog.kurojifusky.com" external>
            Blog
          </KuroLink>
          <KuroLink href="https://www.youtube.com/@kurojifusky" external>
            YouToob
          </KuroLink>
        </nav>
      </header>
      <div
        class="absolute inset-0 -bottom-4 bg-gradient-to-b from-kuro-dark2 w-full"
      />
    </div>
  </div>
</template>
