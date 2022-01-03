/* eslint-disable */
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@/new-scss/styles.scss';`,
      },
    },
  },
};
