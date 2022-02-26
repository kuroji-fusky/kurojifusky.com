<script lang="ts" setup>
const b = defineProps<{
  name: String,
  repo: String,
}>()
</script>

<template>
  <div id="project-item">
    <slot name="image"></slot>
    <h2>{{ name }}</h2>
    <p>
      <slot name="description"></slot>
    </p>
    <a :href="`https://www.github.com/skepfusky/${repo}`" target="_blank"><i class="fab fa-github"></i> GitHub Repo</a>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixin' as *;

#project-item {
  flex-direction: column;
  @include item-center;
  text-align: center;
  padding: var(--item-padding);
  background: var(--overlay);
  border-radius: 6px;

  a {
    padding: 0.95ex 1.4rem;
    margin-top: 0.5rem;
    border-radius: 5px;
    background: rgb(129, 5, 212);
    font-size: 90%;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    box-shadow: 2px 3px 4px rgba(#fff, 12%);
    transition: background 300ms ease;

    &:hover {
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
    margin: 0.75rem 0;
    font-size: 150%;
  }
}
</style>