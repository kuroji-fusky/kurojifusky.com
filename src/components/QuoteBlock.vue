<template>
  <div class="quote-container">
    <div class="quote-container_wrapper">
      <q>{{ quote }}</q>
      <div class="quote-sub"><b>{{ author }}</b><span class="quote-date">{{ date }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: { type: String, default: "Quote stuff" },
    author: { type: String, default: "Author" },
    date: { type: String, default: "Date" },
  },
};
</script>

<style lang="scss">
.quote {
  &-container {
    &_wrapper {
      @include flexy-dir(column);
      padding: 0.7rem 0.85rem;
      @include soft-corners();
      background: mix(gray, black, 16%);
      q {
        font-size: 120%;
      }
    }
  }

  &-sub {
    @include flexy-dir();
    column-gap: 1rem;
    font-size: 90%;
  }

  &-date {
    position: relative;
    opacity: .65;
    &::before {
      content: '•';
      @include pos-a(0, unset, -12px);
    }
  }
}
</style>