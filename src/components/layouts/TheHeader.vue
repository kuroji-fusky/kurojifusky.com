<template>
  <header>
    <div id="navbar" class="flex item-center gap-x-2">
      <router-link to="/" id="logo">
        <strong style="color: var(--fursona-cyan)">skep</strong>
        <span style="color: var(--fursona-yellow)">fusky</span>
        <span>();</span>
      </router-link>
      <nav class="flex gap-x-1.5">
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
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

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    transform: translateX(-7px);
    inset: 18px auto auto auto;
    display: block;
    height: 18px;
    width: 110%;
    background: linear-gradient(90deg,#127a80, #5c0496);
  }
}

#navbar {
  a {
    
    color: var(--color-responsive);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
header nav {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
}

</style>