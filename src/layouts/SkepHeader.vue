<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a><span class="menu-line"></span></li>
        <li><a href="#">Projects</a><span class="menu-line"></span></li>
        <li>
          <a href="#">My Shitty Portfolio</a><span class="menu-line"></span>
        </li>
        <li><a href="#">About meh :3</a><span class="menu-line"></span></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";

header {
  nav {
    @include flexParams(center, unset, row);
    width: 100%;
    padding: 0.55rem;
    padding-top: 0.75em !important;
    background: royalblue;
    color: white;
    font-family: "Lato", Arial, Helvetica, sans-serif;
  }

  ul {
    @include flexParams(unset, unset, row);
  }

  @include liSpacing(20px);

  li {
    @include flexParams(center, center, column);

    font-weight: bold;
    padding: 0 10px;
    filter: opacity(75%);
    opacity: 0.75;
    @include transition(all, 150ms);

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
    @include transition(width, 250ms);
    margin-top: 5px;
    background: cyan;
    box-shadow: 0 0 12px cyan;
    height: 3px;
    width: 0%;
  }
}
</style>