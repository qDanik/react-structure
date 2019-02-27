const webpack = require('webpack');

const DEV_HOST = '127.0.0.1';
const DEV_PORT = '8080';

const PROXY_STATUS = false; // true for enable proxy
const PROXY_CONTEXT = ['/api'];
const PROXY_TARGET = 'https://example.com';
const PROXY_REWRITE = { };
// const PROXY_CONTEXT = ['/api'];
// const PROXY_TARGET = 'https://d.myscore.com.ua/';
// const PROXY_REWRITE = { '^/api': '' };

let devServer = {
  hot: true,
  historyApiFallback: true,
  https: false,
  host: DEV_HOST,
  port: DEV_PORT,
};

if (PROXY_STATUS) {
  devServer = {
    ...devServer,
    proxy: [{
      context: PROXY_CONTEXT,
      target: PROXY_TARGET,
      pathRewrite: PROXY_REWRITE,
      secure: false,
      changeOrigin: true,
    }],
  };
}

module.exports = {
  devServer,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
