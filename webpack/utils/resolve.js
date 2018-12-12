const { resolve } = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    pathinfo: true,
    path: resolve('./public'),
    publicPath: '/',
    filename: chunkData => (chunkData.chunk.name === 'serviceWorker' ? '[name].js' : 'js/[name].[hash:6].js'),
    chunkFilename: 'js/[name].[hash:6].js',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', resolve('./src'), resolve('./lib')],
  },
  plugins: [
    new DotEnv({ path: resolve('./.env') }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
