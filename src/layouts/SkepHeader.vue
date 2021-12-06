<template>
  <header>
    <span id="logo"><img src="" alt="skeperoonis"></span>
    <nav>
      <ul>
        <li><a target="__blank" href="#">Home</a><span class="menu-line blue"></span></li>
        <li><a target="__blank" href="#">Projects</a><span class="menu-line blue"></span></li>
        <li><a target="__blank" href="#">My Shitty Portfolio</a><span class="menu-line blue"></span></li>
        <li><a target="__blank" href="#">About meh</a><span class="menu-line borahae"></span></li>
      </ul>
    </nav>
    <span id="theme"><a href="#"><i class="fas fa-adjust"></i></a></span>
  </header>
</template>

<style lang="scss" scoped>
header {
  @include liSpacing(20px);
  @include flexParams(space-between, unset, row);
  background: rgba(lighten(gray, 8%), 75%);
  padding: 0 1.5rem;
  font-size: 1.15rem;

  #logo,
  #theme {
    @include flexParams(center, center, row);
  }

  nav {
    @include flexParams(center, center, row);
    width: 100%;
    padding: 0.55rem;
    padding-top: 0.75em !important;
    color: white;
    font-family: "Lato", Arial, Helvetica, sans-serif;
  }

  ul {
    @include flexParams(unset, unset, row);
  }

  li {
    @include flexParams(center, center, column);
    @include noPseudo();

    position: relative;
    font-weight: bold;
    padding: 0 10px;
    filter: opacity(75%);
    opacity: 0.75;
    @include transition(all, 200ms);

    a {
      min-width: 4rem;
      text-align: center;
    }

    &:hover {
      filter: opacity(100%);
      opacity: 1;

      .menu-line {
        width: 100%;
      }
    }
  }

  .menu-line {
    @include transition(width, 350ms);
    margin-top: 5px;
    height: 3px;
    width: 0%;
    
    &.blue {
      background: $skep-lightblue;
      box-shadow: 0 0 12px $skep-lightblue;
    }
    
    &.borahae {
      background: lighten($skep-borahae, 15%);
      box-shadow: 0 0 12px lighten($skep-borahae, 15%);
    }
  }
}
</style>