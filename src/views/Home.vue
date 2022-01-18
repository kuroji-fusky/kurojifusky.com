<template>
  <main class="home" role="main">
    <section>
      <h2>My Latest projects</h2>
      <p>The good stuff</p>
      <div id="showcase-grid" class="grid">
        <ShowcaseItem title="Your mom gay"/>
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
      </div>
    </section>
    <section>
      <h2>Contributions</h2>
      <p>none lol</p>
    </section>
  </main>
</template>

<script>
import ShowcaseItem from '@/components/ShowcaseItem.vue';

export default {
  name: 'Home',
  components: {
    ShowcaseItem
  }
}
</script>

<style lang="scss">
/* Grid breakpoints */
$phone-grid-bp: 280px;
$grid-bp: 400px;

#showcase-grid {
  grid-template-columns: repeat(auto-fill, minmax($grid-bp, 1fr));
  gap: 0.55rem;
  padding: 1rem 0;

  @include phone-devices {
    grid-template-columns: repeat(auto-fill, minmax($phone-grid-bp, 1fr));
  }
}
</style>