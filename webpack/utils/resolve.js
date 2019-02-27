const { resolve } = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: { main: './src/index.js' },
  node: {
    fs: 'empty',
    net: 'empty',
  },
  output: {
    pathinfo: true,
    path: resolve('./public'),
    publicPath: '/',
    filename: (chunkData) => {
      switch (chunkData.chunk.name) {
        case 'serviceWorker':
          return '[name].js';
        default:
          return 'js/[name].[hash:6].js';
      }
    },
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
          chunks: 'initial',
          test: /node_modules/,
          priority: 10,
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
