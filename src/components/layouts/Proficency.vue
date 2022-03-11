<script lang="ts" setup>
import ProficencyItem from '@/components/ProficencyItem.vue'
</script>

<template>
  <section id="proficency">
    <h2>Proficency</h2>
    <div id="skill-grid">
      <ProficencyItem :level=3 :since=2021 skill="UI/UX Design" icon="fa-compass-drafting">
        I've always been fascinated by Windows' UI as a kid, and decided to take
        this up a notch and dive into advanced UI/UX design for the past 6
        months or so.
      </ProficencyItem>
      <ProficencyItem :level=4 :since=2021 skill="Front-end web development" icon="fa-laptop-code">
        After editing on Fandom wiki for over a year and I decided,
        "screw it, I'll make my own website" - and woah, look how that
        turned out!
      </ProficencyItem>
      <ProficencyItem :level=1 :since=2022 skill="Back-end web development" icon="fa-server">
        Still learning to become a full-stack developer, it's going <i>pretty</i> well so far! <b>*extreme sarcasm*</b>
      </ProficencyItem>
      <ProficencyItem :level=5 :since=2014 skill="Video editing" icon="fa-clapperboard">
        I've been editing videos since 2014, and needless to say, I've gained a lot of
        experience from it. I use Adobe Premiere for my videos :3
      </ProficencyItem>
      <ProficencyItem :level=3 :since=2017 skill="Music production" icon="fa-music">
        Been producing bangers since 2017, released 10+ singles, 2 EPs and albums on
        SoundCloud, Spotify, and Apple Music.
      </ProficencyItem>
      <div id="proficency-item">
        <router-link to="/roadmap">Roadmap lol</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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

#proficency-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 0.35rem;
  padding: var(--item-padding);
  background: var(--overlay);
  border-radius: 6px;

  div {
    font-size: 96%;
  }
}
</style>