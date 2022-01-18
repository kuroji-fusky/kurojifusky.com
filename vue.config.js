module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/styles.scss";`,
      }
    }
  }
}