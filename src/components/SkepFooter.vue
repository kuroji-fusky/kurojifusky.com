<template>
  <footer>
    <div id="wrapper">
      <div id="social-row">
        <button>o</button>
        <button>o</button>
        <button>o</button>
        <button>o</button>
        <button>o</button>
      </div>
      <div id="footer-info">&copy; {{ new Date().getFullYear() }} Skepfusky, made in Vue.js.</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
#wrapper {
  @include flexy(space-between, center, row);
  max-width: 1280px;
  width: 100%;
  padding: .65rem 1.25rem;
}

#social-row {
  display: flex;
  column-gap: 1rem;

  button {
    $btn-off: whitesmoke;
    $btn-on: $skep-lightblue;
    border: 1px solid $btn-off;
    color: $btn-off;
    padding: .40rem;
    background: none;
    border-radius: 3px;

    &:hover {
      border-color: $btn-on;
      color: $btn-on
    }
  }
}
</style>