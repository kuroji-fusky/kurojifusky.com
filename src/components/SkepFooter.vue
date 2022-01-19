<template>
  <footer>
    <hr>
    <span>&copy; {{ new Date().getFullYear() }} skepfusky</span>
    <span>Updated January 19, 2022.</span>
    <span>Made in Vue.js + TypeScript.</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SkepFooter',
});
</script>