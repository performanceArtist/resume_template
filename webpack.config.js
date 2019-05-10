const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  devServer: {
    port: 5000
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '@import "globals";',
              includePaths: [path.join(__dirname, 'src')]
            }
          }
        ]
      },
      {
        test: /\.(svg|png|ico|xml|json|manifest)$/,
        include: [path.resolve(__dirname, 'src/favicons')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'favicon/'
            }
          }
        ]
      },
      {
        test: /\.(woff|eot|otf|svg|ttf)?$/,
        include: [path.resolve(__dirname, 'src/fonts')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
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
    })
  ]
};

module.exports = (env, options) => {
  if (options.mode === 'production') {
    config.output.publicPath = '/resume/';
  }

  if (options.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
