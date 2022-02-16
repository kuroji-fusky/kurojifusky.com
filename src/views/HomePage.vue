<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const ProficencyLayout = defineAsyncComponent(
  () => import('@/components/layouts/ProficencyLayout.vue')
)
</script>

<template>
  <div class="bd home"></div>
  <main role="main">
    <section class="md-wrapper">
      <div id="main-profile" class="flex gap-1.5 item-center">
        <div id="bg-profile" class="rounded-full">
          <img class="rounded-full" src="@/assets/img/LeahBDay.jpg" alt="An autist" />
        </div>
        <article class="flex flex-col gap-y-1">
          <h1>Skeperino</h1>
          <p>wow</p>
        </article>
      </div>
    </section>
    <div class="md-wrapper">
      <hr />
    </div>
    <section class="md-wrapper flex flex-col gap-y-0.75">
      <article>
        <h2>WHAT I DO</h2>
        <p>Blah blah blah some shit in here</p>
      </article>
      <div id="showcase-grid" class="grid gap-1">
        <router-link
          id="showcase-nav"
          class="rounded-soft flex justify-center item-end"
          to="/projects"
        >
          <span id="showcase-label">Projects</span>
        </router-link>
        <router-link
          id="showcase-nav"
          class="rounded-soft flex justify-center item-end"
          to="/bio"
        >
          <span id="showcase-label">Biography</span>
        </router-link>
        <router-link
          id="showcase-nav"
          class="rounded-soft flex justify-center item-end"
          to="/portfolio"
        >
          <span id="showcase-label">Portfolio</span>
        </router-link>
      </div>
    </section>
    <div class="md-wrapper">
      <hr />
    </div>
    <ProficencyLayout>
      <template #yis>
        you fuckin dumbass
      </template>
    </ProficencyLayout>
  </main>
</template>

<style lang="scss">
#main-profile {
  @media (max-width: 768px) {
    flex-direction: column;
  }

  margin: 0 auto;
  max-width: 1300px;
  padding: 1.15rem 0;

  article {
    width: 100%;

    @media (max-width: 768px) {
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      display: inline;
      line-height: 1.55em;
    }
  }
}

#bg-profile {
  background: linear-gradient(
    90deg,
    #1ba3ab 0%,
    #5c0496 33%,
    #1ba3ab 66%,
    #5c0496 100%
  );
  background-size: 300%;
  animation: smoothBaby 15s linear infinite;

  img {
    transform: scale(0.93) translateY(2px);
    width: 240px;
    height: 240px;

    @media (max-width: 768px) {
      width: 235px;
      height: 235px;
    }
  }
}

@keyframes whomp {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

#showcase-grid {
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-template-columns: 1fr;
}

a#showcase-nav {
  &::after {
    content: "";
    position: absolute;
    height: 150px;
    width: 100%;
    inset: auto auto 0 auto;
    background: linear-gradient(to top, rgba(#000, 66%), rgba(#000, 0%));
  }

  position: relative;
  border: 1px solid #aaa;
  padding: 1rem;
  color: var(--light);
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 135%;
  text-shadow: 0 0 13px rgba(black, 25%);
  height: 260px;
  box-shadow: 0 0 0 var(--shadow-responsive);
  transition: box-shadow 300ms ease;
  overflow: hidden;
  background-size: cover !important;
  background: url("~@/assets/img/LeahBDay.jpg") no-repeat center;
  transition: transform 300ms ease;

  &:hover {
    box-shadow: 0 0 12px var(--shadow-responsive);
    animation: shadowBump 500ms ease;
    transform: translateY(-3px);
  }
}

#showcase-label {
  z-index: 2;
}

@keyframes shadowBump {
  0% {
    box-shadow: 0 0 0 var(--shadow-responsive);
  }
  40% {
    box-shadow: 0 0 24px var(--shadow-responsive);
  }
  100% {
    box-shadow: 0 0 12px var(--shadow-responsive);
  }
}
</style>