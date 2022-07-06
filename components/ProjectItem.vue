<template>
  <div id="project-item" class="card-hoverable">
    <img src="https://github.com/skepfusky.png" />
    <article>
      <h3>{{ title }}</h3>
      <span class="flex gap-x-4 text-xl justify-center py-1">
        <i v-for="i in icon" :class="`devicon-${i}`"></i>
      </span>
      <p>
        {{ description }}
      </p>
    </article>
    <NuxtLink
      class="button bg-sona-royalblue-500"
      :href="`https://github.com/${githubLink}`"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
      Code
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string[]
  githubLink: string
}>()
</script>

<style lang="scss" scoped>
#project-item {
  @apply flex flex-col justify-center items-center p-6 text-center gap-y-2 select-none bg-neutral-600;
  img {
    @apply w-[12rem] h-auto rounded-full;
  }
}

article {
  @apply flex flex-col items-center gap-y-2;
  p {
    @apply leading-6 w-[90%];
  }
}
</style>
