<template>
  <header>
    <router-link to="/"><img src="" alt="Stupid logo"></router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/portfolio">Portfolio</router-link><hr>
          <div class="dd-portfolo">
            <!-- put some content dropdown cringe in here bro -->
          </div> 
        </li>
        <li>
          <router-link to="/discography">Discography</router-link><hr>
          <div class="dd-discography">
            <!-- put some content dropdown cringe in here bro -->
          </div>
        </li>
        <li>
          <router-link to="/about">About</router-link><hr>
          <div class="dd-about">
            <!-- put some content dropdown cringe in here bro -->
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
  ul {
    list-style: none;
    display: flex;
      
    @include md-desktop-devices {
      column-gap: 3rem;
    }

    column-gap: 1rem;
    font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  }

  li {
    @include flexy(unset, center, column);

    color: mix($skep-yellow, black, 15%);
  }

  a {
    padding: .75rem 0;

    @include md-desktop-devices {
      font-size: $desktop-fs;
    }

    font-size: $laptop-fs;
    @include prop-transition(color);

    &:hover {
      color: $skep-yellow;
    }
  }

  hr {
    width: 0%;
    height: 3px;
    background: $skep-yellow;
    border: none;
    @include prop-transition(width);
    position: relative;
    bottom: 6px;
  }

  @at-root li {
    &:hover {
      hr {
        width: 100%;
      }
    }
  }
}

.router-link-exact-active {
  color: $skep-yellow;
}
</style>