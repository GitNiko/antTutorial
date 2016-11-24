'use strict'

var webpack = require('webpack')

var config = {
  target: 'web',
  entry: './src/index.js',
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ]
  },
  resolve: {
      // extensions: ['', '.js', '.jsx']
      modulesDirectories: ['', 'node_modules']
  },
  output: {
    path: './js',
    filename: 'bundle.app.js',
  },
  plugins: [
  ]
}

module.exports = config
