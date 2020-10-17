const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {

  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src/assets/stylesheets/css$'),
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src/assets/stylesheets/scss'),
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          { loader: "sass-loader" }
        ]
      }
    ],
  },
});
