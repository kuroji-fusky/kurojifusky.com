<template>
  <main>
    <HeroHeader />
    <HeroPortfolio />
    <!-- <HeroProjects /> -->
  </main>
</template>

<style scoped>
main {
  @apply mx-auto max-w-screen-2xl px-7 flex flex-col justify-center gap-y-10;
  height: auto;
  @media screen and (min-width: 768px) {
    height: calc(100vh - 10.5rem);
  }
}
</style>
