<script setup lang="ts">
const currentYear = new Date().getFullYear()

const copyright = `© 2013-${currentYear} Kuroji Fusky; unless otherwise stated`
</script>

<template>
  <footer class="flex flex-col items-center py-5 text-center px-9">
    <span>Written in Nuxt 3 and Contentful</span>
    <span id="copyright">{{ copyright }}</span>
  </footer>
</template>
