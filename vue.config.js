module.exports = {
  publicPath: '',
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss";`,
      }
    }
  }
}