var webpack = require('webpack');
new webpack.optimize.CommonsChunkPlugin('common.js'),
new webpack.optimize.DedupePlugin(),
new webpack.optimize.UglifyJsPlugin(),
new webpack.optimize.AggressiveMergingPlugin()


const path = require('path');

const config = {
  entry: [
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;