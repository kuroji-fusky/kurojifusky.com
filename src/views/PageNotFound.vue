<template>
  <div class="page-not-found-stupid">
    <div class="not-found-wrapper">
      <h1>404</h1>
      <span class="not-found-wrap">Haha typical 404 page, who would've figured... and yes, this page does not exist lol</span>
      <span class="not-found-wrap">The content you're looking for doesn't exist or hasn't even created yet; in either way, browse some juicy cringe to get to the good stuff!</span>
      <span style="opacity: .65">— skepfusky</span>
      <span class="not-found-wrap"><router-link class="clickable" to="/">Clicc here to go bacc</router-link></span>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --header-drop-1: var(--sf-cyan-dark-500);
  --header-drop-2: var(--sf-blue-dark-300);
}

.page-not-found-stupid {
  background: var(--backdrop);
  @include pos-a();
  height: 100vh;
  width: 100%;
  z-index: 1000;
  @include flexy-align(center, unset);
  padding-top: 8em;
}

.not-found-wrap {
  // @include flexy-dir;
  // flex-wrap: wrap;
  max-width: 700px;

  a {
    width: max-content;
    padding: 0;
    font-size: inherit;

  }
}

.not-found-wrapper {
  @include flexy-dir(column);
  padding: 0 20px;
  row-gap: 1rem;

  h1 {
    font-size: 350%;
    text-shadow: 4px 4px 0 var(--header-drop-1), 8px 8px 0 var(--header-drop-2);
  }
}

</style>