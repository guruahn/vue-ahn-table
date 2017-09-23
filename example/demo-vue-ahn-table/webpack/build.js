var webpack = require('webpack');
var merge = require('webpack-merge');
var dev = require('./dev');
var path = require('path');

module.exports = merge(dev, {
  
});

if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = false;
  module.exports.plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'js/vendor_vue.js',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
  ];
}