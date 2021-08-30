module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/variables.scss";
        `,
      },
    },
  },
};
