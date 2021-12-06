<template>
  <footer>
    <div id="wrapper">
      <div id="about">
        <p>Skep is stupid basically lol</p>
      </div>
      <div id="social-row">
        <ul>
          <li><a target="_blank" href="https://www.youtube.com/kokorohuskyproductions"><i class="fab fa-youtube"></i></a></li>
          <li><a target="_blank" href="https://www.github.com/skepfusky"><i class="fab fa-github"></i></a></li>
          <li><a target="_blank" href="https://www.twitter.com/skepfusky"><i class="fab fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://www.instagram.com/skepfusky"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      <div id="copyright">Site built using Vue.js<br>Copyright &copy; {{ new Date().getFullYear() }} Skepfusky. All rights reserved.</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
@import '../assets/scss/palette.scss';
@include noPseudo();

footer {
  margin: 0 auto;
}

#wrapper {
  @include flexParams(unset, center, column);
  min-width: 1280px;
  padding: 1rem;
  background: darken($skep-blue, 15%)  ;
}

#social-row {
  @include flexParams(center, center, column);
  &::before {
    display: block !important;
    width: 3em;
    height: 3px;
    background: $skep-lightblue;
    margin-block: 10px;
  }

  @include liSpacing(25px);
  font-size: 115%;

  ul {
    @include flexParams(unset, unset, row);
  }

  li {
    @include transition();
    filter: opacity(70%);
    opacity: 0.7;

    &:hover {
      filter: opacity(100%);
      opacity: 1;
    }
  }
}

#copyright {
  text-align: center;
  margin-top: .55rem;
  font-size: 75%;
}
</style>