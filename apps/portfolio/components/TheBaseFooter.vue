<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mx-auto max-w-screen-xl px-12 py-10 text-center">
    <p id="copyright">
      {{ `Copyright © 2013-${currentYear} Kerby Keith Aquino` }}
      <abbr title="doing business as">d/b/a</abbr>
      Fusky & Co., LLC
    </p>
  </footer>
</template>
