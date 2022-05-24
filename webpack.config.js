const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}