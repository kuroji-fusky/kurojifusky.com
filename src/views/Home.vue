<template>
  <main role="main" class="w-large-desktop">
    <Backdrop imgUrl="album-covers/WATCH THE GODDAMN SUNSET.jpg"/>
    <!-- <gallery-carousel /> -->
    <h2 class="top-heading spacing-tablet">Browse my portfolio of cringe</h2>
    <div id="showcase-card-grid" role="navigation">
      <showcase-card :idSeries="true" />
      <showcase-card title="Yes" :idMusic="true" />
      <showcase-card title="Hi sisters" :idProject="true" />
      <showcase-card title="Yes" :idFilm="true" />
      <showcase-card title="Laebl" :idMisc="true" />
      <showcase-card title="Yes" />
      <showcase-card title="Yes" />
      <showcase-card title="Yes" />
    </div>
  </main>
</template>

<script>
import ShowcaseCard from "../components/ShowcaseCard.vue";
import Backdrop from "../components/Backdrop.vue";

export default {
  components: {
    Backdrop,
    ShowcaseCard,
  },
};
</script>
