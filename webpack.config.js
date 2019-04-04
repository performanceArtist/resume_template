const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require("mini-css-extract-plugin");

const config = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.bundle.js",
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
  ],
};

module.exports = config;
