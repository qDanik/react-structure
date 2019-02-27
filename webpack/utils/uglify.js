const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false,
          },
          compress: {
            sequences: true,
            properties: true,
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            negate_iife: true,
            drop_console: true,
          },
        },
      }),
      // new CompressionPlugin(),
    ],
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: { loader: 'babel-loader', query: { presets: ['@babel/preset-env'] } },
    }],
  },
};
