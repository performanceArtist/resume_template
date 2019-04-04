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
        use: ["pug-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
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

//whatever
/*(env, argv) => {

if (argv.mode === 'development') {}
if (argv.mode === 'production') {}

return config;
}*/

/*
        use: ExtractTextPlugin.extract({ 
          fallback:'style-loader',
          use:['css-loader'],
        })

        */