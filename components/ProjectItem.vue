<template>
  <div id="project-item" class="card-hoverable">
    <img :src="image" />
    <article>
      <h3>{{ title }}</h3>
      <span class="flex gap-x-4 text-xl justify-center py-1">
        <i v-for="i in icon" :class="`devicon-${i}`"></i>
      </span>
      <p>
        {{ description }}
      </p>
    </article>
    <div class="button-group">
      <NuxtLink
        class="button bg-sona-royalblue-500"
        :href="`https://github.com/${githubRepo}`"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
        Code
      </NuxtLink>
      <NuxtLink
        v-if="websiteUrl"
        class="button bg-sona-borahaealt-500"
        :href="websiteUrl"
      >
        Website
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    description: string
    icon: string[]
    githubRepo: string
    image: string
    websiteUrl?: string
  }>(),
  {
    image: "/static/projects/mutahar-funny.jpg",
  }
)
</script>

<style lang="scss" scoped>
#project-item {
  @apply flex flex-col justify-center items-center p-6 text-center gap-y-2 select-none bg-neutral-600;
  
  img {
    @apply w-[12rem] h-[12rem] object-cover rounded-full;
  }
}

article {
  @apply flex flex-col items-center gap-y-2;

  p {
    @apply leading-6 w-[90%];
  }
}

.button-group {
  @apply flex gap-x-2 text-sm;
}
</style>
