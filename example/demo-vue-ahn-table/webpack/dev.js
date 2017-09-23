var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    vendor: [
      'vue',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.js',
  },
  resolve: {
    alias: {
      views: path.resolve(__dirname, '../src/views'),
      components: path.resolve(__dirname, '../src/components'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['.js', '.vue'],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url?limit=10000&name=images/[name].[ext]',
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    }],
  },
};

if (process.env.NODE_ENV === 'dev') {
  // 配置开发服务器
  module.exports.devServer = {
    historyApiFallback: true,
    hot: true,
    progress: false,
    proxy: {},
  };
  module.exports.devtool = '#cheap-module-eval-source-map';

  module.exports.plugins = [
    // 抽离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'js/vendor_vue.js',
    }),
  ];
}