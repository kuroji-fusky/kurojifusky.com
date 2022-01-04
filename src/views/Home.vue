<template>
  <main class="w-large-desktop">
    <Backdrop imgUrl="album-covers/WATCH THE GODDAMN SUNSET.jpg"/>
    <!-- <gallery-carousel /> -->
    <h2 class="top-heading spacing-tablet">Browse my portfolio of cringe</h2>
    <div id="home-card-grid">
      <home-card :idSeries="true" />
      <home-card title="Yes" :idMusic="true" />
      <home-card title="Hi sisters" :idProject="true" />
      <home-card title="Yes" :idFilm="true" />
      <home-card title="Laebl" :idMisc="true" />
      <home-card title="Yes" />
      <home-card title="Yes" />
      <home-card title="Yes" />
    </div>
  </main>
</template>

<script>
import HomeCard from "../components/HomeCard.vue";
import Backdrop from "../components/Backdrop.vue";

export default {
  components: {
    Backdrop,
    HomeCard,
  },
};
</script>
