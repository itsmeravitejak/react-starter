
const path = require('path');

const config = {
  entry: [
    './index.js',
  ],
  output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname, "dist"),
   publicPath: '/dist/'

 },
 mode:'production',
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