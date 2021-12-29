<template>
  <Backdrop/>
  <main class="w-large-desktop">
    <h2 class="top-heading spacing-tablet">TRASH MUSIC</h2>
    <latest-music />
  </main>
</template>

<script>
import LatestGarbage from '@components/LatestMusic.vue'
import Backdrop from '../components/Backdrop.vue'

export default {
  components: {
    Backdrop,
    "latest-music": LatestGarbage,
}
}
</script>

<style lang="scss">
.w-large-desktop {
  padding: 0 1rem;
  padding-bottom: .75rem !important;
}
</style>