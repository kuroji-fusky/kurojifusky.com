module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/skep-styles.scss";`
      }
    }
  }
};