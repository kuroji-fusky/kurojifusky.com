<script setup lang="ts">
const projects = [
  { img: "/fursonas/04.png", title: "skepfusky", githubLink: "skepfusky/skepfusky.xyz" },
  { img: "/fursonas/05.png", title: "Fren Time Tracker", githubLink: "skepfusky/fren-time-tracker" },
  { img: "/fursonas/06.png", title: "Scammerino", githubLink: "skepfusky/scammerino" },
  { img: "/fursonas/07.png", title: "skepfusky", githubLink: "skepfusky/skepfusky.xyz" },
];
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <TBA />
    <h2 class="p-3">Dev projects</h2>
    <div class="grid gap-4 grid-cols-3 p-3">
      <ContentItem
        v-for="project in projects"
        :title="project.title"
        :img="project.img"
        :github-link="project.githubLink"
      />
    </div>
    <BaseHead title="Projects" description="Dev projects" />
  </div>
</template>
