module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/skep-portfolio/' : '/',
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
