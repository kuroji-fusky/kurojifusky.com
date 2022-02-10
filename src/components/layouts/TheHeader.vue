<template>
  <header>
    <div class="flex gap-x-1.25">
      <div id="logo">
        <span>skep</span>
        <span>fusky</span>
        <span>()</span>
      </div>
      <nav class="flex gap-x-1.5">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
#logo {
  font-family: 'Ubuntu Mono', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif;
}
</style>