const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
  ],
};

module.exports = (env, argv) => {

if (argv.mode === 'development') {}
if (argv.mode === 'production') {}

return config;
}