var ExtractTextPlugin = require("extract-text-webpack-plugin")
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./src/data')


module.exports = {

  entry: './src/router',
  output: {
    path: 'build',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css'),
        include: __dirname + '/src'
      },
      {
        test: /\.scss/,
        //loader goes right to left.
        //scss to css then to js bundle.
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'),
        include: __dirname + '/src',
        exclude: __dirname + '/src/assets/'
      },
      {
        test: /\.scss/,
        //any scss files found in /src/assets is GLOBAL.
        loader: ExtractTextPlugin.extract('css!sass'),
        include: __dirname + '/src/assets/css',
      },
      {
        test: /\.jpg/,
        loader: 'file-loader?name=assets/img-[hash:6].[ext]',
        include: __dirname + '/src',

      }
    ],
  },
  plugins: [
    //you can change what stylesheet is added.
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin('main', data.routes, data),

  ]
};
