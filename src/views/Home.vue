<template>
  <main class="w-large-desktop">
    <gallery-carousel />
    <h2 id="top-heading">Browse some cringe</h2>
    <div id="home-card-grid">
      <home-card :isNew="true" :idSeries="true" />
      <home-card title="Yes" :idMusic="true"/>
      <home-card title="Hi sisters" :idProject="true" />
      <home-card title="Yes" :idFilm="true"/>
      <home-card title="Laebl" :idMisc="true" />
      <home-card title="Yes" />
      <home-card title="Yes" />
      <home-card title="Yes" />
    </div>
  </main>
</template>

<script>
import HomeCard from "@components/HomeCard.vue";

export default {
  components: {
    HomeCard,
  },
};
</script>