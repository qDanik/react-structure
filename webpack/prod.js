const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const styles = require('./utils/styles');
const resolve = require('./utils/resolve');
const uglify = require('./utils/uglify');
const html = require('./utils/prodHtml');
const defines = require('./utils/defines');
const copy = require('./utils/copy');
const analyzer = require('./utils/analyzer');

module.exports = merge({
  entry: { serviceWorker: './src/worker/index.js' },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['**/*.*'], { root: path.resolve('./public') }),
  ],
}, styles, resolve, uglify, html, copy(), /* analyzer, */ defines(false));
