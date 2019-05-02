
const path = require('path');

const config = {
  entry: [
    './index.js',
  ],
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