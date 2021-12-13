module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/global.scss";`
      }
    }
  }
};