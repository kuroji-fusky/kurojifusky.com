<template>
  <main role="main" class="w-large-desktop">
    <div id="quote-content-grid">
      <quote-container />
      <quote-container />
      <quote-container />
      <quote-container />
    </div>
  </main>
</template>

<script>
import QuoteBlock from "@/components/QuoteBlock.vue";

export default {
  components: {
    'quote-container' :QuoteBlock,
  },
};
</script>

<style lang="scss">
#quote-content-grid {
  --stg: 75ms;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  padding: 1.15rem;
}

.quote-container {
  animation: quotesAnim 700ms ease;
  animation-fill-mode: backwards;
  // -webkit-animation: quotesAnim 700ms ease;
  // -webkit-animation-fill-mode: backwards;
  // z-index: -1;
}

@keyframes quotesAnim {
  from {
    opacity: 0;
    transform: translateY(80px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

// .quote-container {
  // animation-delay: calc(1*var(--stg));
// }

@for $i from 1 through 4 {
  .quote-container:nth-child(#{$i}) {
    animation-delay: calc(#{$i} * var(--stg));
    -webkit-animation-delay: calc(#{$i} * var(--stg));
  }
}
</style>