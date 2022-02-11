<template>
  <main role="main">
    <section class="md-wrapper">
      <div id="project-grid" class="gap-0.5">
        <div class="flex flex-col gap-y-0.5">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
        <div class="flex flex-col gap-y-0.5">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
        <div class="flex flex-col gap-y-0.5">
          <ProjectItem />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import ProjectItem from '../components/ProjectItem.vue';

export default {
  components: {
    ProjectItem
  }  
}
</script>

<style lang="scss">
#project {
  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}
</style>