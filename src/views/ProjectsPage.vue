<script lang="ts" setup>
import ProjectItem from '../components/ProjectItem.vue';
</script>

<template>
  <main role="main">
    <section class="md-wrapper">
      <div id="grid-responsive" class="grid gap-0.5">
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