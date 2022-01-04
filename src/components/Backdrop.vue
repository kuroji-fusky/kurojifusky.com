<template>
  <div class="backdrop">
    <img :src="`@/img/${imgUrl}`" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
      default: 'skep-vars/SkepFormalTransparent.png'
    }
  }
}
</script>

<style lang="scss">
.backdrop {
  @include pos-a();
  z-index: -150;
  height: 50rem;
  overflow: hidden;
  pointer-events: none;

  img {
    width: 100vw;
    opacity: .75;
    filter: blur(10px);
    transform: translateY(-15%) scale(1.25);
  }

  &::before,
  &::after {
    @include pseudo-block();
    width: 100%;
    z-index: 20;
  }

  &::before {
    height: 25rem;
    @include pos-a();
    background: linear-gradient(0deg, var(--backdrop-trans), var(--backdrop));
  }

  &::after {
    height: 45rem;
    background: linear-gradient(var(--backdrop-trans), var(--backdrop));
    @include pos-a(unset, 0, 0, unset);
  }
}
</style>