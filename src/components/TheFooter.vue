<template>
  <footer>
    <div id="animated-gradient"></div>
    <div id="wrapper" class="flex">
      <div id="social-wrapper">
        <div>
          <strong>Social media</strong>
          <div id="social-bar" class="flex">
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div>
          <strong>Music</strong>
          <div id="social-bar" class="flex">
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-itunes-note"></i></a>
          </div>
        </div>
      </div>
      <span id="site-author">&copy; {{ new Date().getFullYear() }} skepfusky</span>
    </div>
  </footer>
</template>

<style lang="scss">
#animated-gradient {
  background: orangered;
  height: 8px;
}

footer {
  background: orange;
  #wrapper {
    padding: 1.25rem 2rem;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
    max-width: $md-x-desktop;

    @include phone-devices {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  #social {
    &-wrapper {
      column-gap: 1.25rem;
      @extend .flex;

      h3 {
        padding-bottom: 0.25rem;
      }
    }
    
    &-bar {
      font-size: 1.25rem;
      column-gap: 1.25rem;
    }
  }
  
  #site-author {
    font-size: 0.90rem;
  }
}
</style>