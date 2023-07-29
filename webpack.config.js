//'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'script.js',
  },
  watch: true,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
};


