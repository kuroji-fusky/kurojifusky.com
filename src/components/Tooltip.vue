<template>
<div class="tooltip"><span>{{ content }}</span></div>
</template>

<script>
export default {
  props: {
    content: {type: String, default: "内容"}
  }
}
</script>

<style lang="scss">
.tooltip {
  $tt-w: 400px;
  @include flex_params(center, center, unset);
  width: $tt-w;
  position: absolute;
  top: -40px;
  font-size: 69%;
  left: calc($tt-w / 2 - ($tt-w - 10px)); // wow math
  pointer-events: none;
  filter: opacity(0%);
  opacity: 0;
  transition: all 300ms ease;

  span {
    padding: 0.55rem 0.95rem;
    background: black;
    border-radius: 5px;
  }
}
</style>