const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const outputDirectory = 'dist';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  bail: isProduction,
  context: path.join(__dirname),
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,     
        use: {
          loader: 'babel-loader'
        }      
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    },
    compress: true
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/client/Components/PdfExemplo.pdf' },
        { from: './src/client/Components/ExcelExemplo.xlsx' },
        { from: 'node_modules/pdfjs-dist/cmaps/', to: 'cmaps/' },
      ],
    })
  ]
};
