const merge = require('webpack-merge');
const styles = require('./utils/styles');
const resolve = require('./utils/resolve');
const copy = require('./utils/copy');
const html = require('./utils/devHtml');
const devServer = require('./utils/devServer');
const defines = require('./utils/defines');
const analyzer = require('./utils/analyzer');

module.exports = merge({
  mode: 'development',
  devtool: 'source-map',
  performance: { hints: false },
  externals: [
    { External: ['window', 'VK'] },
  ],
}, styles, resolve, html, devServer, copy(true), /*analyzer,*/ defines(true));
