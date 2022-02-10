<template>
  <header>
    <div id="navbar" class="flex item-center gap-x-2">
      <router-link to="/" id="logo">
        <strong style="color: var(--fursona-cyan)">skep</strong>
        <span style="color: var(--fursona-yellow)">fusky</span>
        <span>();</span>
      </router-link>
      <nav class="flex gap-x-2.25">
        <router-link to="/projects" class="flex flex-col items-center">
          Projects
          <span id="nv-bar"></span>
        </router-link>
        <router-link to="/about" class="flex flex-col items-center">
          About
          <span id="nv-bar"></span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
#logo {
  font-family: 'Ubuntu Mono', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif;
  font-size: 27px;
  position: relative;
  color: white;
  text-shadow: 3px 3px 0 rgba(royalblue, 45%);
  transition: text-shadow 300ms ease;
  animation: whomp 1s ease;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    transform: translateX(-7px);
    inset: 18px auto auto auto;
    display: block;
    height: 18px;
    width: 110%;
    background: linear-gradient(90deg,#1ba3ab 0%,#5c0496 33%,#1ba3ab 66%, #5c0496 100%);
    background-size: 300%;
    animation: smoothBaby 7s linear infinite;
  }
}

@keyframes whomp {
    0% {transform: scale(0)};
  100% {transform: scale(1)};

}

@keyframes smoothBaby {
  0% {background-position: left};
  100% {background-position: right};
}

#navbar {
  > nav {
    a {
      position: relative;
      color: var(--color-responsive);

      &.router-link-exact-active {
        color: var(--link-hover);

        #nv-bar {
          width: 100%;
        }
      }
    }
  }

  > a#logo.router-link-exact-active {
    text-shadow: 0 0 12px rgba(white, 80%);
  }
}
header nav {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
}

#nv-bar {
  transition: width 300ms ease;
  border-radius: 69px;
  width: 0%;
  height: 3px;
  inset: 2rem auto auto auto;
  position: absolute;
  background: var(--link-hover);
  box-shadow: 0 0 14px var(--link-hover);
}

</style>