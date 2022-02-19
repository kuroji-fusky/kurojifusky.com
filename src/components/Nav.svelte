<script>
  let home_active = '';  
  let project_active = '';
  let about_active = '';  
  
  export { home_active as homeactive }
  export { project_active as projectactive }
  export { about_active as aboutactive }
</script>

<header>
  <nav>
    <a id="logo" class="{home_active}" href="/">
      <span style="color: royalblue; font-weight: 700">skep</span>
      <span style="color:yellow">fusky</span>
      <span>();</span>
    </a>
    <a class="{project_active}" href="/projects">PORTFOLIO</a>
    <a class="{about_active}" href="/about">ABOUT</a>
  </nav>
</header>

<style lang="scss">

#logo.active {
  color: #f5f5f5;
  text-shadow: 0 0 13px #f5f5f5;
  font-weight: 400;
}

header {
  font-size: 115%;
}

nav, #logo {
  display: flex;
}

nav {
  column-gap: 3rem;
  max-width: 1366px;
  margin: 0 auto;
  padding: 1.25rem 1rem;
  display: flex;
  align-items: center;

  a {
    color: #f5f5f5;
  }
}

#logo {
  font-family: 'Ubuntu Mono', Consolas, monospace;
  font-size: 135%;
}

$activeYourMom: cyan;

.active {
  color: $activeYourMom;
  text-shadow: 0 0 13px $activeYourMom;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    background: $activeYourMom;
    border-radius: 50%;
    transform: translateY(4px);
  }

  &:nth-child(1) {
    &::after {
      display: none;
    }
  }
  
  &:nth-child(2) {
    &::after {
      margin: 0 45px;
    }
  }

  &:nth-child(3) {
    &::after {
      margin: 0 25px;
    }
  }
}
</style>
