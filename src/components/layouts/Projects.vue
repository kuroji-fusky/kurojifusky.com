<script lang="ts" setup>
import ProjectItem from '@/components/ProjectItem.vue'

const tessinator = "Avatar of Tessinatior" 
const cutie = "Avatar of skepfusky.net" 
const paco = "Avatar of Paco Drawing Site repository" 
</script>

<template>
  <section>
    <div id="project-grid">
      <ProjectItem 
        name="Tessinator"
        repo="tessinator"
        description="
          A Discord bot made in early 2021 to learn about the Node.js runtime
          with no prior knowledge with JavaScript whatsoever,
          it'll be rewritten entirely from TypeScript soon."
      >
        <img src="@/assets/img/tessinator.png" :alt="tessinator" :aria-label="tessinator">
      </ProjectItem>
      <ProjectItem 
        name="skepfusky.net" 
        repo="skepfusky.net" 
        description="My portfolio website that you're on right now! Written in
          Vue 3 + TypeScript + Vite. Vite makes things super fast!"
        >
          <img src="@/assets/img/08.png" :alt="cutie" :aria-label="cutie">
      </ProjectItem>
      <ProjectItem 
        name="Paco Drawing Site" 
        repo="pandapaco-art-statistics" 
        description="A GitHub repo that collects a bunch drawing data from Paco
          Panda. The site uses Vue.js as the front-end and Python to parse
          and plot said data."
        >
          <img src="@/assets/img/07.png" :alt="paco" :aria-label="paco">
      </ProjectItem>
    </div>
    <div style="display: flex; justify-content: center;">
      <a href="https://github.com/skepfusky?tab=repositories" target="_blank">More abominations I've created</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  row-gap: 0.55rem;
  margin: 0.55rem auto;
}

#project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}

a {
  padding: 0.95ex 1.4rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  background: rgb(5, 136, 212);
  font-size: 90%;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  box-shadow: 2px 3px 4px rgba(#fff, 12%);
  transition: background 300ms ease;

  &:hover {
    background: rgb(5, 84, 158);
  }
  }
</style>