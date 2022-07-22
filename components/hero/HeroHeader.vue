<template>
  <div id="header-hero">
    <h1 id="wordmark-gradient">skepfusky</h1>
    <ul id="skills">
      <li>projects</li>
      <li>about me</li>
      <li>discography</li>
      <li>videos</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#header-hero {
  @apply flex flex-col items-center gap-y-4 select-none;
}

#wordmark-gradient {
  @apply leading-[4.5rem] text-transparent text-6xl bg-clip-text;

  background-image: linear-gradient(
    90deg,
    theme("colors.sona-borahae.600"),
    theme("colors.sona-royalblue.500"),
    theme("colors.sona-borahae.600"),
    theme("colors.sona-royalblue.500"),
  );

  background-size: 300% 100%;
  animation: gradientScroll 10s linear infinite;
}

@keyframes gradientScroll {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

#skills {
  @apply flex gap-x-8;

  li {
    @apply after:content-['•'] after:pl-8 last:after:content-none;
  }
}
</style>
