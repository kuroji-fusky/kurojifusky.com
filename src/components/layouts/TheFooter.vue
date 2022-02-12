<template>
  <footer>
    <div id="wrapper" class="flex justify-between item-center">
      <div id="social-icons" class="flex gap-x-1.75">
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-itunes-note"></i></a>
      </div>
      <div id="copyright">Copyright © 2014-{{ new Date().getFullYear() }} skepfusky; Made in Vue 3 + TypeScript</div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background: green;
}

#social-icons {
  font-size: 120%;
  a {
    color: var(--text-responsive);

    &:hover {
      color: var(--link-hover);
    }
  }
}
</style>