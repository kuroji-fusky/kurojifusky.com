<template>
  <header :class="[themeToggle ? 'theme-light' : '']">
    <div class="desktop-hero-brand">
      <a class="desktop-hero-brand_btn">
        <i class="fas fa-bars"></i>
        <!-- <div class="desktop-dropdown_menu">
          Put something incredibly dumb in here
        </div> -->
      </a>
      <router-link id="icon-desktop" to="/">
        <img :alt="logoAlt" :aria-label="logoAlt" />
      </router-link>
      <ul>
        <li><router-link to="/discography">Discography<span class="navbar-line"></span></router-link></li>
        <li><router-link to="/use-of-content">Use of Content<span class="navbar-line"></span></router-link></li>
        <li><router-link to="/about">About Me<span class="navbar-line"></span></router-link></li>
        <li><router-link to="/quotes">Quotes<span class="navbar-line"></span></router-link></li>
      </ul>
    </div>
    <router-link id="icon-mobile" to="/">
      <img :alt="logoAlt" :aria-label="logoAlt" />
    </router-link>
    <a class="theme-toggle-btn">
      <i class="fas fa-adjust"></i>
      <!-- <div class="desktop-dropdown_toggle">
        <strong>Theme</strong>
        <strong>Language</strong>
      </div> -->
    </a>
  </header>
  <div id="mobile-padding"></div>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      logoAlt: "Insert stupid logo",
    };
  },
  props: {
    themeToggle: Boolean,
  },
};
</script>

<style lang="scss">
$hd-padding: 2rem;

header {
  @include flexy(space-between, center, row);
  @include prop-transition();
  width: 100%;
  padding: 0.45rem 1.5rem;
  background: transparent;
  position: static;

  @include md-tablet-devices {
    padding: 0.55rem $hd-padding;
    background: black;
    @include pos-a;
  }
}

.desktop-hero-brand {
  @include flexy();
  column-gap: 1rem;

  ul {
    display: flex;
    list-style: none;
    column-gap: 1rem;
    li {
      @include flexy-dir(column);
    }
    a {
      font-size: 98% !important;
      position: relative;
      top: 1px;
      opacity: .55;
      position: relative;

      &:hover {
        opacity: 1;
      }
    }

    .router-link-active {
      opacity: 1;

      @at-root .navbar-line {
        @include prop-transition(width);
        @include pos-a();
        transform: translateY(40px);
        background: white;
        height: 2px;
        width: 0%;
      }

      .navbar-line {
        width: 100%;
      }


    }

    @include md-laptop-devices {
      display: none;
    }
  }
}

#icon {
  &-desktop {
    display: block;

    @include md-tablet-devices {
      display: none;
    }
  }
  &-mobile {
    display: none;

    @include md-tablet-devices {
      display: block;
    }
  }
}

:is(.desktop-hero-brand_btn, .theme-toggle-btn) {
  padding: 0.65rem 0.85rem;
  border-radius: 6px;
  font-size: 22px;
  background: var(--sf-blue-dark-400);
  cursor: pointer;

  &:hover {
    background: var(--sf-blue-dark-100);
  }
}

a {
  @include flexy(center, center, column);
  padding: 0.75rem 0;

  @include md-desktop-devices {
    font-size: $desktop-fs;
  }

  font-size: $laptop-fs;
  @include prop-transition(color);
}

.desktop-dropdown {
  &_menu {
    @include pos-a(3.75rem, unset, 1.55rem);
  }

  &_toggle {
    @include pos-a(3.75rem, unset, unset, 1.55rem);
  }

  :is(&_menu, &_toggle) {
    border: 3px dashed orange;
    padding: 0.35rem 0.55rem;
    z-index: 10;
    border-radius: 6px;

    @include md-tablet-devices {
      display: none !important;
    }
  }
}

.router-link-exact-active {
  span {
    color: var(--skep-lightblue);
  }

  hr {
    width: 100%;
  }
}

#mobile-padding {
  display: none;

  @include md-tablet-devices {
    display: block;
    padding: calc($hd-padding + 0.9rem);
  }
}
</style>