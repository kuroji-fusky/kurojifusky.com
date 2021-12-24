<template>
  <main class="center-wrapper">
    <h2>BRUH MOMENT</h2>
    <div id="home-card-grid">
      <home-card />
      <home-card />
      <home-card />
      <home-card />
    </div>
  </main>
</template>

<script>
import HomeCard from "../components/HomeCard.vue";

export default {
  components: {
    HomeCard,
  },
};
</script>

<style lang="scss">
#home-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 1.25rem;
  margin: 0 auto;
  padding: 1.25rem;
  
  @media only screen and (min-width: $large-desktop-w) {
    max-width: $large-desktop-w;
  }

  max-width: $desktop-w;

}
</style>

