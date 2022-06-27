<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const projects = [
  {
    img: "fursonas/04.png",
    title: "skepfusky",
    githubLink: "skepfusky/skepfusky.xyz",
    description: "the website you're currently browsing rn",
  },
  {
    img: "fursonas/05.png",
    title: "Fren Time Tracker",
    githubLink: "skepfusky/fren-time-tracker",
  },
  {
    img: "fursonas/06.png",
    title: "Scammerino",
    githubLink: "skepfusky/scammerino",
  },
  {
    img: "fursonas/07.png",
    title: "Paco Drawing Stats",
    githubLink: "skepfusky/pacopanda-drawing-stats",
  },
];
</script>

<template>
  <div class="tba-fit">
    <BaseHead
      title="Home"
      description="Official skepfusky website I guess lmao"
    />
    <TBA />
    <div>
      <section id="hero-header">
        <article id="hero-header-content">
          <h2>
            <span>&lt;</span>
            <span id="gradient-scroll">skepfusky</span>
            <span>&#47;&gt;</span>
          </h2>
          <p>
            Hi, I'm <strong id="gradient">skepfusky</strong>, simply known as
            <strong id="gradient">Skep</strong>, also known by my stage name
            <strong id="gradient">Kokoro Husky</strong> on streaming platforms
            -- I'm a 20-year-old self-employed and self-taught hobbyist from the
            Philippines!
          </p>
          <p className="mt-2">
            I'm just trying to get my name out there as I'm extremely passionate
            about sharing and possibly inspiring future generations through my
            broad set of skills, talent, and art as a self-taught individual.
          </p>
        </article>
        <div id="hero-header-img">
          <img src="/static/fursonas/07.png" alt="Kokoro Husky" />
        </div>
      </section>
      <div class="max-w-screen-xl mx-auto">
        <h2 class="p-3">Dev projects</h2>
        <div class="grid gap-4 grid-cols-3 p-3">
          <ContentItem
            v-for="project in projects"
            :title="project.title"
            :description="project.description"
            :img="project.img"
            :github-link="project.githubLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tba-fit {
  // height: calc(100vh - 15rem);
  height: 100%;
  // position: relative;
}

#hero-header {
  @apply max-w-screen-2xl my-0 mx-auto h-[500px] px-6 gap-x-10 flex items-center;

  &-content {
    @apply flex flex-col gap-y-3 text-[120%];

    h2 {
      @apply font-ubuntu-mono font-bold text-5xl;
    }
  }

  &-img {
    @apply flex justify-center;

    img {
      @apply w-[350px] rounded-full object-contain;
    }
  }
}
</style>
