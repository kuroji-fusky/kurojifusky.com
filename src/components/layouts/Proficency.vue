<script lang="ts" setup>
import ProficencyCard from '../ProficencyCard.vue'
</script>

<template>
  <section>
    <h2>Proficency</h2>
    <h3>Programming</h3>
    <div id="skill-grid">
      <ProficencyCard :level=3 :since=2021 skill="Front-end web development" />
      <ProficencyCard :level=1 levelCustom="Dying" :since=2022 skill="Back-end web development" />
      <ProficencyCard :level=3 :since=2021 skill="UI/UX Design" />
    </div>
    <h3>Media and arts</h3>
    <div id="skill-grid">
      <ProficencyCard :level=5 :since=2014 skill="Video editing" />
      <ProficencyCard :level=3 :since=2018 skill="Music production" />
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  row-gap: 0.55rem;
  margin: 0.55rem auto;
}

#skill-grid {
  gap: 0.65rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
}
</style>