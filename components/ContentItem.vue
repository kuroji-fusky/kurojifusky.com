<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    img?: string;
    websiteLink?: string;
    githubLink?: string;
  }>(),
  {
    img: "/fursonas/08.png",
    title: "Title",
    description: "Description",
  }
);
</script>

<template>
  <section id="item-container" itemscope itemtype="http://schema.org/Projects">
    <div id="image-container">
      <img :src="`/static/${img}`" :alt="`Image for ${title}`" />
    </div>
    <article id="item-contents">
      <h2 class="text-2xl">{{ title }}</h2>
      <p>{{ description }}</p>
      <div id="item-lower-third">
        <div class="flex gap-2">
          <a v-if="githubLink" :href="`https://github.com/${githubLink}`" role="button">
            <fa-icon :icon="['fab', 'github']" />
            Code
          </a>
          <a v-if="websiteLink" :href="websiteLink" role="button">
            <fa-icon :icon="['fas', 'globe']" size="sm" />
            Website
          </a>
        </div>
        <!-- <span>
          some technology in here
        </span> -->
      </div>
    </article>
  </section>
</template>

<style lang="scss">
#item-container {
  @apply bg-zinc-900 rounded-xl overflow-hidden shadow-md  transition-transform duration-300;

  &:hover {
    @apply -translate-y-1;

    img {
      @apply scale-105;
    }
  }
}

#image-container {
  @apply overflow-hidden;

  img {
    @apply object-cover w-full h-[14rem] transition-transform duration-300;
  }
}

#item-contents {
  @apply flex flex-col gap-y-0.5 px-4 py-3 cursor-default;
}

#item-lower-third {
  @apply flex justify-between;
  a {
    @apply flex items-center gap-x-1 text-[90%] rounded-md py-[0.22rem] px-[0.44rem] bg-zinc-700;
  }
}
</style>
