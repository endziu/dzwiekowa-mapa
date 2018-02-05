const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default
const srcPath = path.resolve(__dirname, 'client')
const distPath = path.resolve(__dirname, 'dist')

const VENDOR_LIBS = ['react', 'react-dom', 'react-router', 'react-router-dom']

module.exports = {
  context: srcPath,
  target: 'web',
  entry: {
    client: './index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: distPath,
    filename: '[name].[chunkhash].js',
    publicPath: '/static'
  },
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
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: '*',
          allow: '/*',
          disallow: '/api'
        }
      ],
      host: 'https://dzwiekowamapa.pl'
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  devtool: 'source-map'
}
