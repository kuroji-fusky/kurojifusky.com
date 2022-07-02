<template>
  <header>
    <div id="wrapper">
      <div>
        <span id="logo">
          <img src="" alt="skepfusky lol" />
        </span>
      </div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tools">Tools</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
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

a,
li {
  @apply py-[2rem];
}
</style>
