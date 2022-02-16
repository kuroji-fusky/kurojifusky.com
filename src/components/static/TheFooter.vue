<template>
  <footer>
    <div id="wrapper" class="flex justify-between item-center">
      <div id="social-icons" class="flex gap-x-1.75 item-center">
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-itunes-note"></i></a>
        <a id="support-btn" class="rounded-soft" href="#" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-youtube"></i>
          Support my ass
        </a>
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
  font-size: 110%;

  a {
    color: var(--color-responsive);

    &:hover {
      color: var(--link-hover);
    }
  }
}

#support-btn {
  font-size: 80%;
  padding: 0.35rem 0.60rem;
  border: 2px solid var(--color-responsive);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
}

#copyright {
  font-size: 90%;
}
</style>