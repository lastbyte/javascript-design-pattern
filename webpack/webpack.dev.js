const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const path = require("path");
const htmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const { title } = require("process");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry : path.resolve(__dirname, '../src/index.ts'),
  module : {
    rules : [
        {loader : 'ts-loader', test: /\.(ts|tsx)?$/},
        {loader : 'babel-loader', test: /\.(js|jsx)?$/, exclude : /node_modules/},
        {loader : 'source-map-loader', test: /\.(js)?$/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: path.resolve(__dirname, "../src/index.ejs"),
      title: "Javascript Design Patterns Examples",
      filename : 'index.html',
      inject: "head",
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, "../public/"),
    }),
  ],
  devServer: {
    compress : true,
    port : 8080,
    static: {
      directory: path.join(__dirname, "../public/"),
    },
    hot: true,
  },

  output : {
    path : path.resolve(__dirname, '../public/'),
    filename : 'bundle.js',
  }
};
