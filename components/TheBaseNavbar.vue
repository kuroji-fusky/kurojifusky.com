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
            <NuxtLink to="#">Tools</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">About</NuxtLink>
            <div id="dropdown">
              <ul>
                <li>
                  <NuxtLink to="/fursona">Fursona</NuxtLink>
                </li>
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

#nav-header :is(li, a) {
  @apply relative py-[1.65rem];
}

#dropdown {
  @apply absolute top-[3.5rem] right-0 p-1 rounded-md bg-neutral-500 shadow-md;

  li {
    @apply p-0;
  }

  a {
    @apply px-3 py-2 transition-all duration-200 hover:bg-neutral-400 rounded-md;
  }
}
</style>
