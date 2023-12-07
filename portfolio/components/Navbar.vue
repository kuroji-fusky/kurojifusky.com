<script setup lang="ts"></script>

<template>
  <div class="sticky inset-0 bottom-0 z-10">
    <div class="relative">
      <header class="px-8 py-5 flex justify-between relative z-[5]">
        <NuxtLink to="/" aria-label="Home" title="Home">
          <KuroLogo :width="150" />
        </NuxtLink>
        <button>
          <LucideMenu />
        </button>
      </header>
      <div
        class="absolute inset-0 bg-kuro-lavender-900 bg-opacity-25 backdrop-blur-sm"
      />
    </div>
  </div>
</template>
