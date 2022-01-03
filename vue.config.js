module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/styles.scss";`,
      }
    }
  }
}