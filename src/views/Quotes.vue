<template>
  <main class="w-large-desktop">
    <div id="quote-content-grid">
      <quote-block />
      <quote-block />
      <quote-block />
      <quote-block />
    </div>
  </main>
</template>

<script>
import QuoteBlock from "@components/QuoteBlock.vue";

export default {
  components: {
    QuoteBlock,
  },
};
</script>