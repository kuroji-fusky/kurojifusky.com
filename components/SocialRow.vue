<template>
  <div
    class="flex gap-4 md:gap-5 lg:gap-6 flex-wrap justify-center text-base lg:text-xl mt-2"
    role="list"
  >
    <a
      v-for="item in socials"
      :href="item.link"
      target="_blank"
      role="listitem"
    >
      <fa-icon :icon="['fab', `fa-${item.icon}`]" />
      <span class="label">{{ item.label }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { socials } from "./SocialList";
</script>

<style scoped>
a {
  @apply relative px-3 py-2;
}

a::before {
  @apply content-[""] left-0 right-0 bottom-0 transition-[height] duration-300 h-0 -z-[1];
}

a:hover::before {
  @apply h-[2.75rem] w-full absolute bg-sona-borahae-700;
}

.label {
	@apply absolute -bottom-[1.25rem] left-0 text-sm pointer-events-none whitespace-nowrap;
  @apply opacity-0 transition-opacity;
}

a:hover .label {
  @apply opacity-100;
}
</style>
