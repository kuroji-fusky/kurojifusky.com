<template>
  <header>
    <div class="wrapper">
      <NuxtLink to="/" activeClass="active">
        <span id="logo">skepfusky</span>
      </NuxtLink>
      <nav>
        <NuxtLink to="/" activeClass="active">Home</NuxtLink>
        <NuxtLink to="/fursona" activeClass="active">
          Fursona
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply my-0 mx-auto max-w-screen-2xl p-6 flex justify-between;

  nav {
    @apply flex gap-x-4;

    .active {
      @apply font-bold;
      text-shadow: 0 0 24px #4851f7;
    }
  }
}

#logo {
  @apply font-ubuntu-mono text-2xl;
}
</style>
