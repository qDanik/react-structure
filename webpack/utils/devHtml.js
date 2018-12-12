const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: resolve('./static/index.html'),
      minify: true,
    }),
  ],
};
