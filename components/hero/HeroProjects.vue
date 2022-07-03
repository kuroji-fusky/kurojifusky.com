<template>
  <div id="projects-heading">
    <h2 class="highlight">Latest Projects</h2>
    <span>
      <button class="scrollers">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button class="scrollers">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </span>
  </div>
  <div id="projects-carousel-wrapper">
    <div id="projects-carousel">
      <HeroProjectsItem />
      <HeroProjectsItem />
      <HeroProjectsItem />
      <HeroProjectsItem />
      <HeroProjectsItem />
      <HeroProjectsItem />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#projects-heading {
  @apply flex justify-between items-center px-4 py-3;

  span {
    @apply flex gap-x-1;
  }
}

.scrollers {
  @apply flex items-center justify-center px-4 py-3 rounded-md transition-all duration-[320ms] hover:bg-sona-borahae-500 hover:bg-opacity-25;
}

#projects-carousel-wrapper {
  @apply overflow-x-auto relative;
}

#projects-carousel {
  @apply flex gap-x-3 px-4 py-1;
  scroll-padding: 0;
  scroll-snap-type: both mandatory;
}
</style>
