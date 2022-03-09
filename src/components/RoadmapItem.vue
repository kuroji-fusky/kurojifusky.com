<script lang="ts" setup>
interface countryRoads {
  year: string;
  heading: string
  desc: string
}

const props = defineProps<countryRoads>()
</script>

<template>
  <div class="roadmap-item">
    <div id="rmi-item-intersect">
      <slot></slot>
    </div>
    <div id="rmi-item-content">
      {{ year }}
      <h3>{{ heading }}</h3>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixin' as *;

.roadmap-item {
  @include item-center;
  width: 100% !important;

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5ex;
    row-gap: 1.8rem;
    text-align: center;
  }
}

#rmi-item-intersect {
  position: relative;
  margin-left: 120px;
}

#rmi-item {
  &-intersect {
    --roadmap-item-size: 120px;
    --roadmap-item-position: 63px;

    @media only screen and (max-width: 820px) {
      --roadmap-item-position: 0;
      margin: 0;
    }
    
    display: block;
    transition: all 300ms ease;
    transform: translateX(calc(-1% - var(--roadmap-item-size) + var(--roadmap-item-position)));
    height: var(--roadmap-item-size);
    width: var(--roadmap-item-size);
    background: #202020;
    border: 6px solid white;
    border-radius: 50%;
    flex-shrink: 0;

    img {
      width: 100%;
      border-radius: inherit;
    }
  }

  &-content {
    background: var(--overlay);
    display: block;
    margin-right: 4rem;
    padding: 1.75ex;
    border-radius: 6px;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0 42px #202020;

    @media only screen and (max-width: 820px) {
      margin: 0;
    }
  }
}

</style>