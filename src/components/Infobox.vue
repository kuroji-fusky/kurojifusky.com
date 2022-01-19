<template>
  <div id="skep-info">
    <div class="skep-info__container">
      <h3>Country of origin</h3>
      <span>Philippines</span>
    </div>
    <div class="skep-info__container">
      <h3>Birth date</h3>
      <span>March 15, 2002</span>
    </div>
    <div class="skep-info__container">
      <h3>Occupation</h3>
      <span>a lot</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Infobox',
})
</script>
