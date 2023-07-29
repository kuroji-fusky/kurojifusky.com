<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="max-w-screen-xl px-12 py-10 mx-auto text-center">
    <p id="copyright">
      {{ `Copyright © 2013-${currentYear} Kerby Keith Aquino` }}
      <abbr title="doing business as" class="cursor-help">d/b/a</abbr>
      Fusky Labs, LLC
    </p>
  </footer>
</template>
