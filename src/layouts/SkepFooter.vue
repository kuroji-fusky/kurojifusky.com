<template>
  <footer>
    <div id="wrapper">
      <div id="about">
        <p>Something stupid in here</p>
      </div>
      <div id="social-row">
        <ul>
          <li><a href="#"><i class="fab fa-youtube"></i><span class="text-spacing">skepfusky</span></a></li>
          <li><a href="#"><i class="fab fa-github"></i><span class="text-spacing">skepfusky</span></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i><span class="text-spacing">@skepfusky</span></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i><span class="text-spacing">@skepfusky</span></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
@include noPseudo;

footer {
  margin: 0 auto;
}

#wrapper {
  @include flexParams(unset, center, column);
  min-width: 1280px;
  padding: 1rem;
  background: royalblue;
}

#social-row {
  @include flexParams(center, center, column);
  &::before {
    display: block !important;
    width: 3em;
    height: 3px;
    background: cyan;
    margin-block: 10px;
  }
  @include liSpacing(30px);
  font-size: 88%;
  ul {
    @include flexParams(unset, unset, row);
  }

  li {
    @include transition();
    filter: opacity(70%);
    opacity: .7;

    &:hover {
      filter: opacity(100%);
      opacity: 1;
    }
  }
}
</style>