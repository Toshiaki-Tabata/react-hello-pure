const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

const src = './src';

module.exports = {
    entry: {
      app: "./src/index.js"
    },
    output: {
//      path: __dirname + '/public/js',
//      filename: "[name].js"
    },
    plugins: [
      //    new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({ filename:'css/main.css' }),
      new HtmlWebpackPlugin({
        template: src + '/index.html',
        filename: 'index.html'
      })
    ],
    devServer: {
      contentBase: __dirname + '/dist',
      port: 8080,
//      publicPath: '/js/'
    },
    devtool: "source-map",
    mode: 'development',
    module: {
      rules: [
        {
          test: /.s([ac]|)ss$/,
    
          use: [
            MiniCssExtractPlugin.loader,// JSとしてバンドルせず、CSSファイルで出力
            {
              loader: 'css-loader',//css-loaderでCSSの依存関係を解決
              options: {
                  url: false, // url()を変換しない
                  sourceMap: true//ソースマップツールを有効
              }
            },
  /*          {
              loader: 'postcss-loader',
              options: {
                  sourceMap: true, //ソースマップを有効
                  plugins: [
                      require('cssnano')({
                          preset: 'default',
                      }),
                      require('autoprefixer')({
                          grid: true, // CSS Grid Layout
                          "browsers": [
                              "> 1%",
                              "IE 10"
                          ]
                      })
                  ]
              }
            },*/
            {
              loader: 'sass-loader',//SASSをCSSに変換
              options: {
                  sourceMap: true//ソースマップツールを有効
              }
            }
          ]
        },
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
            }
          ],
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
};