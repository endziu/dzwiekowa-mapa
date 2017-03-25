const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  context: srcPath,
  target: 'web',

  entry: {
    client: './client/index.js'
  },
  output: {
    path: distPath,
    filename: '[name].js',
    publicPath: '/'
  },
  target: "web",
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'source-map'
}

