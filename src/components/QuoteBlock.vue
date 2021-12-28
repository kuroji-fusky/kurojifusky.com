<template>
  <article class="quote-container">
    <q>{{ quote }}</q>
    <span>{{ author }}</span>
  </article>
</template>

<script>
export default {
  props: {
    quote: { type: String, default: 'Something dumb in here I guess' },
    author: { type: String, default: 'Author' },
  }
}
</script>

<style lang="scss">
.quote {
  &-container {
    padding: 1rem;
    border-radius: 6px;
  }
}
</style>