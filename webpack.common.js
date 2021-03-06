const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dev = process.env.NODE_ENV === "dev"

module.exports = {

  entry: {
    app: './src/index.js',
  },
  // devtool: dev ? "eval-source-map": "source-map",
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
              },
              {
                tag: 'video',
                attribute: 'src',
                type: 'src'
              }
            ]
          }
        }
      },
      {
        test: /\.(mp4|png|svg|jpe?g|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "imgs"
              }
          },
          {
            loader: 'image-webpack-loader', //trait imgs before the fil-loader handle them
            options: {
              disable: dev,
              // bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     name: "[name].[hash].[ext]",
        //     outputPath: "imgs"
        //   }
        // }
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
