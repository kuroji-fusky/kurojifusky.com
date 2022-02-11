<template>
  <a :href="link" id="project-item">
    {{ yes }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectItem',
  props: {
    src: String,
    link: {type: String, default: '#'},
    yes: {type: String, default: 'Seal my virginity'}
  }  
})
</script>

<style lang="scss">
a#project-item {
  
  color: var(--color-responsive);
}
</style>