module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { limit: 10000, name: 'fonts/[name].[ext]' } }],
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { limit: 10000, name: 'img/[hash:6].[ext]' } }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'url-loader', options: { name: 'img/[hash:6].[ext]' } }],
      },
      {
        test: /\.(mp3)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { limit: 10000, name: 'sound/[hash].[ext]' } }],
      },
    ],
  },
};
