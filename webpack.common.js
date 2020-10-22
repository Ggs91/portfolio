const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: {
            list: [
              '...',
              {
                tag: 'a',
                attribute: 'href',
                type: 'src'
              }
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: './src/template.html'
    })
  ]
};
