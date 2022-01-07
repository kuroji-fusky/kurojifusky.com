module.exports = {
  publicPath: '',
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/styles.scss";`,
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
