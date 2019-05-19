/**
 * @fileOverview webpack.config.js
 * @author Nono Karames <karames@gmail.com>
 * @version 1.0
 */

/*
  El módulo path proporciona utilidades para trabajar con rutas de archivos
  y directorios
  Evitar conflictos con node, windows y linux tienen diferentes estilos de rutas
*/

// require es utilizado por CommonJS - ES6 utilizada import
// import path from 'path';

import '@babel/polyfill';
const DIST_PATH = './dist';

const path = require('path');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');

// Configuración Webpack
const WebpackConfig = {
  // devtool: 'source-map',
  /*
  resolve: {
    extensions: ['.js'],
  },
  */
  entry: {
    'main': path.join(__dirname, './src/js/main.js'),
  },

  output: {
    path: path.resolve(__dirname, DIST_PATH),
    filename: './js/[name].js',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          // style-loader para inyectar directamente en el archivo.js
          // {loader: 'style-loader'}
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browser: ['last 2 versions'],
              },
              plugins: () => [autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'htmlhint-loader',
          options: {
            configFile: '.htmlhintrc',
          },
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {
            html5: true,
            useShortDoctype: false,
            removeComments: true,
            removeAttributeQuotes: false,
            collapseWhitespace: true,
            conservativeCollapse: false,
            minimize: true,
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      dry: true,
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/codigo.html',
      filename: 'codigo.html',
    }),
  ],

  devServer: {
    port: 5000,
  },
};

module.exports = WebpackConfig;
