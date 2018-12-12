const webpack = require('webpack');

module.exports = isDev => ({
  plugins: [
    new webpack.DefinePlugin({ DEVELOPMENT: isDev }),
  ],
});
