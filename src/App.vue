<template>
<div id="app">
  <skepHeader></skepHeader>
  something something fridges
  <skepFooter></skepFooter>
</div>
</template>

<script>
import skepHeader from './layouts/SkepHeader.vue'
import skepFooter from './layouts/SkepFooter.vue'

export default {
  name: 'skep-portfolio',
  components: {
    skepHeader,
    skepFooter
  }
}
</script>

<style lang="scss">
@use 'assets/scss/styles.scss';
</style>
