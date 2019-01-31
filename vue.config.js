module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `
          @import '@/style/variables.scss';
        `
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
