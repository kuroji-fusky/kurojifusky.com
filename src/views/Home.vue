<template>
  <main role="main" class="w-large-desktop">
    <Backdrop imgUrl="album-covers/WATCH THE GODDAMN SUNSET.jpg"/>
    <!-- <gallery-carousel /> -->
    <section id="platform-count">
      <span style="text-transform: uppercase; opacity: .65; margin: 1rem 0;">A blue fusky boi with...</span>
      <div class="count-grid" role="contentinfo grid">
        <div class="count youtube">
          <h1 class="counter">{{ youtube }}</h1>
          <div class="count_lower-third">
            <span>subscribers on YouTube</span>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
        <div class="count soundcloud">
          <h1 class="counter">{{ soundcloud }}</h1>
          <div class="count_lower-third">
            <span>followers on SoundCloud</span>
            <i class="fab fa-soundcloud"></i>
          </div>
        </div>
        <div class="count spotify">
          <h1 class="counter">{{ spotify }}</h1>
          <div class="count_lower-third">
            <span>followers on Spotify</span>
            <i class="fab fa-spotify"></i>
          </div>
        </div>
        <div class="count github">
          <h1 class="counter">{{ github }}</h1>
          <div class="count_lower-third">
            <span>follower on GitHub lol</span>
            <i class="fab fa-github"></i>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <h2 class="top-heading spacing-tablet">Browse my portfolio of cringe</h2>
      <div class="responsive-grid" role="contentinfo grid">
        <showcase-card img="album-covers/A New Life final cover.png" imgSize="600" title="A New Life" desc="The sophomore album that no one asked" :idMusic="true" :isNew=true />
        <showcase-card title="Jin Woo's Adventure" desc="A cringy school vlog series with 2 seasons filmed entirely on a GoPro" :idSeries="true" />
        <showcase-card title="Data stats crap" desc="Totally a bruh moment" :idSeries="true" />
        <showcase-card title="A documentary about a failure" desc="Coming soon!" :idFilm="true" />
        <showcase-card :data-hide-mobile="true" title="Horizon" desc="A debut album by yours truly" :idMusic="true"/>
        <showcase-card :data-hide-mobile="true" title="Discord Bots" desc="Introducing my total abominations!" :idProject="true" />
      </div>
    </section>
    <section id="contributions">
      <h2 class="top-heading spacing-tablet">Contributions</h2>
      <p>None lol</p>
    </section>
    <section id="collabs">
      <h2 class="top-heading spacing-tablet">People I've worked with</h2>
      <div class="responsive-grid" role="contentinfo grid">
        <div class="item-flex-col">
          Sum Content
        </div>
        <div class="item-flex-col">
          The Cheese is
        </div>
        <div class="item-flex-col">
          OOZIN
        </div>
      </div>
    </section>
    <section id="more-about-this-autist">
      <h2 class="top-heading spacing-tablet">More about myself</h2>
        <div class="count-grid" role="contentinfo">
          <div class="mat-item">Biography</div>
          <div class="mat-item">Arts</div>
          <div class="mat-item">Stuff</div>
          <div class="mat-item">Artworks on mi</div>
        </div>
    </section>
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
  data() {
    return {
      youtube: '1,230',
      spotify: 7,
      soundcloud: 25,
      github: 1
    }
  }
};
</script>

<style lang="scss">
.count {
  @include soft-corners;
  background: gray;
  padding: .85rem;
  cursor: default;

  h1 {
    font-size: 170%;
  }

  &-grid {
    display: grid;
    gap: .85rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    // padding: 0 1.5rem;
  }

  &_lower-third {
    display: flex;
    justify-content: space-between;
    opacity: .66;

    .svg-inline--fa {
      font-size: 120%;
    }

    span {
      font-size: 90%;
    }
  }
}
</style>