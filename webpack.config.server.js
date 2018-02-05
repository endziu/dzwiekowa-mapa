const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const srcPath = path.resolve(__dirname, 'server')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  context: srcPath,
  entry: {
    server: './index.js'
  },
  output: {
    path: distPath,
    filename: 'server.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
  plugins: [new ExtractTextPlugin('style.css')],
  externals: nodeExternals(),
  devtool: 'source-map'
}
