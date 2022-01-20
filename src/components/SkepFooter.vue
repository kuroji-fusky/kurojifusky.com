<template>
  <footer>
    <span>&copy; {{ new Date().getFullYear() }} skepfusky</span>
    <span style="font-size: 88%">Updated January 20, 2022</span>
    <span style="font-size: 88%">Made in Vue 3 + Vite</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SkepFooter',
});
</script>