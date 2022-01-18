<template>
  <header>
    <div id="desktop-nav">
      <div id="desktop-nav_fixed" class="flex">
        <button @click="ass"><i class="fas fa-bars"></i></button>
        <router-link to="/">
          <img :src="brandSvg" :alt="brand" :aria-label="brand">
        </router-link>
      </div>
      <ul class="flex flex-row justify-center" role="navigation">
        <li class="flex flex-center flex-column">
          <router-link id="top-nav" to="/portfolio">Portfolio</router-link>
          <span class="nav-hoverline"></span>
          <div class="dropdown-nav">
            <ul>
              <li><router-link to="/discography">Discography</router-link></li>
              <li><router-link to="/series">Series</router-link></li>
              <li><router-link to="/film">Film</router-link></li>
              <li><router-link to="/sketches">Sketches</router-link></li>
            </ul>
          </div>
        </li>
        <li class="flex flex-center flex-column">
          <router-link id="top-nav" to="'/projects">Projects</router-link>
          <span class="nav-hoverline"></span>
          <div class="dropdown-nav">
            <strong>Open-source</strong>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Lucky's Treehouse</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">data</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">stupid app lol</a></li>
            </ul>
          </div>
        </li>
        <li class="flex flex-center flex-column">
          <router-link id="top-nav" to="/about">About</router-link>
          <span class="nav-hoverline"></span>
        </li>
      </ul>
    </div>
    <div id="mobile-nav" class="flex justify-center">
      <button><i class="fas fa-bars"></i></button>
      <router-link to="/">
        <img :src="brandSvg" :alt="brand" :aria-label="brand">
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      brandSvg: '',
      brand: 'Site logo'
    }
  },
  methods: {
    ass() {
      alert('Your mom')
    }
  }
}
</script>

<style lang="scss">
$header-default: mix(hsl(219, 92%, 15%),#2076c8, 90%);
header {
  color: whitesmoke;
}
#desktop-nav,
#mobile-nav {
  background: $header-default;

  ul {
    list-style: none;
  }

  button {
    border: none;
    color: whitesmoke;
    background: none;
    font-size: 1.10rem;
  }
}

#desktop-nav {
  @include laptop-devices-4-3-max {
    display: none;
  }

  button {
    padding: 0 0.75rem;

    &:hover {background: rgba(white, 15%)}
  }

  &_fixed {
    @include pos-a(3px, 1em);
    column-gap: 0.55rem;
  }

  > ul {
    column-gap: 2rem;
    font-size: 105%;
  }

  a {padding: 1.125rem 0.35rem;}

  li {
    &:hover {
      .nav-hoverline {
        width: 100%;
      }

      .dropdown-nav {
        pointer-events: all;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}

#mobile-nav {
  @include laptop-devices-4-3-max {
    display: flex;
  }

  display: none;
  padding: 1.125rem 0;

  button {
    @include pos-a(5px, 0.25rem);
    padding: 0.85rem 1rem;
  }
}

#top-nav {
  font-weight: 700;
  font-family: 'Noto Sans KR', Arial, sans-serif;
}

.dropdown-nav {
  @include pos-a(3.9rem);
  background: hsl(1, 0%, 23%);
  box-shadow: 0 0 12px rgba(black, 45%);
  width: max-content;
  padding: 0.75rem;
  font-size: 90%;
  pointer-events: none;
  opacity: 0;
  z-index: 50;
  font-size: 1.05rem;
  transform: translateY(-5px);
  transition: transform 475ms cubic-bezier(.19,1,.22,1);
  border-bottom: 4px solid #48ddf7;

  strong {padding: 0 0.55rem;}

  > ul {
    @extend .flex;
    @extend .flex-column;
  }

  li {
    &:hover {
      background: #48ddf7;
      color: black;
      border-radius: 3px;
    }

    > a {
      padding: 0.35rem 0.55rem !important;
      width: 100%;
      display: block;
    }
  }
}

.nav-hoverline {
  transform: translateY(-13px);
  height: 3px;
  width: 0%;
  background: #48ddf7;
  box-shadow: 0 0 12px #48ddf7;
  transition: width 475ms cubic-bezier(.19,1,.22,1);
}
</style>