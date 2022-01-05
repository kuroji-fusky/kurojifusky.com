module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/styles.scss";`,
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
