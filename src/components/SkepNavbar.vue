<template>
  <header>
    <router-link to="/">
      <!-- <img src alt="Stupid logo" /> -->
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/portfolio">
            <span>Portfolio</span>
            <hr />
          </router-link>
          <div class="dd-portfolio">portfolio content</div>
        </li>
        <li>
          <router-link to="/about">
            <span>About</span>
            <hr />
          </router-link>
          <div class="dd-about">about content</div>
        </li>
      </ul>
    </nav>
    <div>
      <div id="theme-toggle">
        <!-- TODO: Make a light/dark switch thingy component here you lazy piece of shit -->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$menus_uwu: "discography", "portfolio", "about";
// #region main navbar
nav {
  ul {
    list-style: none;
    display: flex;
    @include prop-transition(column-gap);

    @include md-desktop-devices {
      column-gap: 3rem;
    }

    column-gap: 1rem;
    font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
  }
}

hr {
  width: 0%;
  height: 3px;
  background: $skep-lightblue;
  border: none;
  @include prop-transition(width);
  position: relative;
  bottom: -3px;
}

a {
  @include flexy(center, center, column);
  padding: 0.75rem 0;

  @include md-desktop-devices {
    font-size: $desktop-fs;
  }

  font-size: $laptop-fs;
  @include prop-transition(color);

  &:hover {
    span {
      color: $skep-lightblue;
    }

    hr {
      width: 100%;
    }
  }
}

.router-link-exact-active {
  span {
    color: $skep-lightblue;
  }

  hr {
    width: 100%;
  }
}
// #endregion

// #region dropdown
li {
  position: relative;

  @each $menu in $menus_uwu {
    .dd-#{$menu} {
      @include pos-a(3rem, unset, -3px);
      z-index: 5;
      font-size: 0.97rem;
      padding: 0.75rem;
      box-shadow: 0 0 12px rgba(black, 25%);
      border-radius: 6px;
      background: mix(black, gray, 60%);
      opacity: 0;
      transform: translateY(0px);
      pointer-events: none;
      transition: opacity 300ms ease, transform 300ms ease;
    }
  }

  &:hover {
    @each $menu in $menus_uwu {
      .dd-#{$menu} {
        transform: translateY(6px);
        opacity: 1;
        pointer-events: all;
      }
    }

    span {
      color: $skep-lightblue;
    }

    hr {
      width: 100%;
    }
  }
}
// #endregion
</style>