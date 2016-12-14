var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client.js',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: './public/'
  },
  plugins: [
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    new ExtractTextPlugin('./styles/styles.css', {
    allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      //{
      //  test: /\.scss$/,
      //  loaders: ['style', 'css', 'postcss', 'sass']
      //},
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'file-loader'
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style","css!sass")
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
