<template>
  <main class="w-large-desktop">
    <h2 id="top-heading">Browse some cringe</h2>
    <div id="home-card-grid">
      <home-card :isNew="true" />
      <home-card title="Yes" />
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