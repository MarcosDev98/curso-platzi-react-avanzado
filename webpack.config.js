const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'production',
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512,
    maxAssetSize: 512
  }
}