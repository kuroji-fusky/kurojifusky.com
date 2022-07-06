<template>
  <header>
    <div id="wrapper">
      <NuxtLink to="/">
        <span id="logo">
          <img src="" alt="skepfusky" />
        </span>
      </NuxtLink>
      <nav id="nav-header">
        <ul>
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Other works</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">About</NuxtLink>
            <div id="dropdown">
              <ul>
                <li><NuxtLink to="/fursona">Fursona</NuxtLink></li>
                <li><NuxtLink to="#">Technologies</NuxtLink></li>
                <li><NuxtLink to="#">Resume</NuxtLink></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#wrapper {
  @apply flex justify-between items-center select-none px-10;
}

nav > ul {
  @apply flex gap-x-14;
}

#nav-header {
  :is(li, a) {
    @apply relative py-[1.65rem];
  }

  li:hover #dropdown {
    @apply opacity-100 top-[4rem] pointer-events-auto;
  }
}

#dropdown {
  @apply opacity-0 z-10 pointer-events-none absolute top-[3.5rem] right-0 p-1 rounded-md bg-neutral-500 shadow-md transition-all duration-300;

  li {
    @apply p-0;
  }

  a {
    @apply block px-3 py-1 transition-all duration-200 hover:bg-neutral-400 rounded-md;
  }
}
</style>
