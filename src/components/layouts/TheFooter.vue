<template>
  <footer class="flex justify-between item-center">
    <div id="social-icons" class="flex gap-x-1.75">
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify"></i></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-itunes-note"></i></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud"></i></a>
    </div>
    <div id="copyright">Copyright © 2014-{{ new Date().getFullYear() }} skepfusky</div>
  </footer>
</template>

<style lang="scss">
#social-icons {
  font-size: 120%;
  a {
    color: var(--text-responsive);
  }
}
</style>