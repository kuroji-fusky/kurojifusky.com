<template>
  <main role="main" class="w-large-desktop">
    <Backdrop imgUrl="album-covers/WATCH THE GODDAMN SUNSET.jpg"/>
    <!-- <gallery-carousel /> -->
    <h2 class="top-heading spacing-tablet">Browse my portfolio of cringe</h2>
    <div class="responsive-grid" role="navigation">
      <showcase-card img="album-covers/A New Life final cover.png" imgSize="600" title="A New Life" desc="The sophomore album that no one asked" :idMusic="true" :isNew=true />
      <showcase-card title="Jin Woo's Adventure" desc="A cringy school vlog series with 2 seasons filmed entirely on a GoPro" :idSeries="true" />
      <showcase-card title="Data stats crap" desc="Totally a bruh moment" :idSeries="true" />
      <showcase-card title="A documentary about a failure" desc="Coming soon!" :idFilm="true" />
      <showcase-card title="Horizon" desc="A debut album by yours truly" :idMusic="true"/>
      <!-- <showcase-card title="Discord Bots" desc="Introducing my total abominations!" :idProject="true" /> -->
      <!-- <showcase-card title="Laebl" :idMisc="true" /> -->
    </div>
  </main>
</template>

<script>
import ShowcaseCard from "../components/ShowcaseCard.vue"
import Backdrop from "../components/Backdrop.vue"

export default {
  components: {
    Backdrop,
    ShowcaseCard,
  },
};
</script>
