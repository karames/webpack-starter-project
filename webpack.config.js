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
// import PATH from 'path';

const PATH = require('path');
const DIST_PATH = './dist';

const AUTOPREFIXER = require('autoprefixer');
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const CLEAN_WEBPACK_PLUGIN = require('clean-webpack-plugin');
// const WEBPACK = require('webpack');

// Configuración Webpack
const WEBPACK_CONFIG = {
  // devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    'main': PATH.join(__dirname, './src/js/main.js'),
  },
  output: {
    path: PATH.resolve(__dirname, DIST_PATH),
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
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MINI_CSS_EXTRACT_PLUGIN.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browser: ['last 2 versions'],
              },
              plugins: () => [AUTOPREFIXER],
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
    new CLEAN_WEBPACK_PLUGIN(),
    new MINI_CSS_EXTRACT_PLUGIN({
      filename: './css/[name].css',
    }),
    new HTML_WEBPACK_PLUGIN({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HTML_WEBPACK_PLUGIN({
      template: './src/codigo.html',
      filename: 'codigo.html',
    }),
  ],
};

// Exportamos como un módulo de CommonJS
module.exports = WEBPACK_CONFIG;
