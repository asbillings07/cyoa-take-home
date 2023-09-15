const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join, resolve } = require('path')

module.exports = ({ mode } = { mode: 'production' }) => ({
  mode,
  entry: join(__dirname, 'ui', 'src', 'index.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'ui', 'src', 'index.html')
    })
  ],
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})
