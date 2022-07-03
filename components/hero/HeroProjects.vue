<template>
  <div id="projects-heading">
    <h2>Latest Projects</h2>
    <span>
      <button>
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </span>
  </div>
  <div id="projects-carousel">
    <HeroProjectsItem />
    <HeroProjectsItem />
    <HeroProjectsItem />
    <HeroProjectsItem />
    <HeroProjectsItem />
  </div>
</template>

<style lang="scss" scoped>
#projects-heading {
  @apply flex justify-between items-center px-4 py-3;

  span {
    @apply flex gap-x-1;
  }

  button {
    @apply flex items-center justify-center px-4 py-3 rounded-md transition-all duration-[320ms] hover:bg-sona-borahae-500 hover:bg-opacity-25;
  }
}

#projects-carousel {
  @apply flex gap-x-3 px-4 py-1;
}
</style>
