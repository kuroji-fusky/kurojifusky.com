<template>
  <main role="main">
    <section class="md-wrapper">
      <div id="main-profile" class="flex gap-1.5 item-center">
        <div id="bg-profile" class="rounded-full">
          <img class="rounded-full" src="@/assets/logo.png" alt="An autist" />
        </div>
        <article class="flex flex-col gap-y-1">
          <h1>Skeperino</h1>
          <p>
            wow
          </p>
        </article>
      </div>
    </section>
    <div class="md-wrapper">
      <hr>
    </div>
    <section class="md-wrapper flex flex-col gap-y-0.75">
      <h2>WHAT I DO</h2>
      <div id="showcase-grid" class="grid gap-1">
        <router-link id="showcase-nav" class="rounded-soft flex justify-center item-end" to="/projects">Projects</router-link>
        <router-link id="showcase-nav" class="rounded-soft flex justify-center item-end" to="/bio">Biography</router-link>
        <router-link id="showcase-nav" class="rounded-soft flex justify-center item-end" to="/portfolio">Portfolio</router-link>
      </div>
    </section>
    <div class="md-wrapper">
      <hr>
    </div>
    <section class="md-wrapper flex flex-col gap-y-0 75">
      <h2>PROFICENCY</h2>
      <div id="xp-grid">
        <div id="xp-item">
          <span>web dev lol</span>
        </div>
      </div>
    </section>
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
  background: linear-gradient(90deg,#1ba3ab 0%,#5c0496 33%,#1ba3ab 66%,#5c0496 100%);
  background-size: 300%;
  animation: smoothBaby 15s linear infinite;

  img {
    transform: scale(0.93);
    width: 250px;

    @media (max-width: 768px) {
      width: 255px;
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
  border: 1px solid #aaa;
  padding: 1rem;
  color: var(--color-responsive);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 120%;
  text-shadow: 0 0 13px rgba(black, 25%);
  height: 260px;
}
</style>