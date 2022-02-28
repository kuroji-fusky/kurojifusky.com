<script lang="ts" setup>
interface abominations {
  name: string;
  repo: string;
  description: string;
}

const props = defineProps<abominations>()
</script>

<template>
  <div id="project-item">
    <slot></slot>
    <h2>{{ name }}</h2>
    <p>
      {{ description }}
    </p>
    <a :href="`https://www.github.com/skepfusky/${repo}`" target="_blank"><i class="fab fa-github"></i> GitHub Repo</a>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixin' as *;

#project-item {
  $gd-border: 2px;
  flex-direction: column;
  @include item-center;
  text-align: center;
  padding: var(--item-padding);
  background: rgba(32, 32, 32, 0.95);
  border-radius: 6px;
  position: relative;
  border: $gd-border solid #0000;
  bottom: 0;
  transition: bottom 300ms ease;
  background-clip: padding-box;
  -webkit-background-clip: padding-box;

  &:hover {
    bottom: 6px;
    @media (max-width: 768px) {
      bottom: 0;
    }
  }

  &::before {
    content: '';
    border-radius: inherit;
    position: absolute;
    inset: 0 0 0 0;
    background: linear-gradient(69deg, orchid, royalblue);
    z-index: -1;
    margin: -$gd-border;
  }

  p {
    margin-bottom: 60px;
  }

  a {
    position: absolute;
    bottom: 1.35rem;
    padding: 0.95ex 1.4rem;
    border-radius: 5px;
    background: rgb(129, 5, 212);
    font-size: 90%;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    box-shadow: 2px 3px 4px rgba(#fff, 12%);
    transition: background 300ms ease;

    &:hover, &:active {
      background: rgb(97, 5, 158);
    }
  }

  img {
    width: 175px;
    border-radius: 50%;
    margin-top: 0.25rem;
    border: 5px solid #aaa;
  }

  h2 {
    margin: 1rem 0 0.65rem;
    font-size: 150%;
  }
}
</style>