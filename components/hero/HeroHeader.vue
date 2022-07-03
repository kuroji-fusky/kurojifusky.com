<template>
  <div id="header-hero">
    <h1 id="wordmark-gradient">skepfusky</h1>
    <ul id="skills">
      <li>Hobbyist</li>
      <li>Programmer</li>
      <li>Indie musician</li>
      <li>Video editor</li>
      <li>Novice VFX artist</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#header-hero {
  @apply flex flex-col items-center gap-y-4 select-none;
}

#wordmark-gradient {
  @apply leading-[4.5rem] text-transparent text-6xl bg-clip-text bg-gradient-to-r from-sona-borahae-600 to-sona-royalblue-500;
}

#skills {
  @apply flex gap-x-8;

  li {
    @apply after:content-['•'] after:pl-8 last:after:content-none;
  }
}
</style>
