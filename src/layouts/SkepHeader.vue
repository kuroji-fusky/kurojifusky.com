<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a><span class="menu-line"></span></li>
        <li><a href="#">Projects</a><span class="menu-line"></span></li>
        <li><a href="#">My Shitty Portfolio</a><span class="menu-line"></span></li>
        <li><a href="#">About meh :3</a><span class="menu-line"></span></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scope>
@import '../assets/scss/bruh.scss';

header {
  nav {
    @include flex-params(center, unset, row);
    width: 100%;
    padding: .55rem;
    padding-top: .75em !important;
    background: royalblue;
    color: white;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }

  ul {
    @include flex-params(unset, unset, row);
  }

  li {
    @include flex-params(center, center, column);
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }

    font-size: 125%;
    font-weight: bold;
    padding: 0 10px;

    a {
      min-width: 4rem;
      text-align: center;
    }

    &:hover {
      .menu-line {
        width: 100%;
      }
    }
  }

  .menu-line {
    @include transition(width, 300ms);
    margin-top: 3px;
    background: cyan;
    box-shadow: 0 0 12px cyan;
    height: 3px;
    width: 0%;
  }
}
</style>