const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'frontend/html/template.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './frontend/src/index.jsx',
  ],
  output: {
    path: path.resolve('static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devServer: {
    publicPath: '/',
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/ad': {
        target: 'http://localhost:8000',
        secure: false,
      },
    },
  },
  plugins: [HtmlWebpackPluginConfig],
};
