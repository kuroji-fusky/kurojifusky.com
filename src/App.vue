<template>
  <main>
    <div id="avatar-flip-container">
      
    </div>
  </main>
  <footer>&copy; 2014-{{ new Date().getFullYear() }} Skepfusky</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  }
});
</script>

<style lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/defaults.scss';
@import '@/assets/scss/styles.scss';
</style>
