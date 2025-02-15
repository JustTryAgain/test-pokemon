const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { src, entry, build, public, env } = require('./paths');

module.exports = {
  entry,
  output: {
    path: build,
    filename: 'scripts/[name].[contenthash].js',
    chunkFilename: 'scripts/[name].[contenthash].chunk.js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': src
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[contenthash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(public, 'index.html'),
      favicon: path.join(public, 'favicon.png')
    }),
    new Dotenv({
      path: env,
      systemvars: true,
      safe: true
    })
  ]
};
