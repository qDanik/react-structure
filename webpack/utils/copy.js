const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (sw = false) => {
  const paths = [
    {
      from: './static/manifest/**.*',
      transformPath: target => target.replace('static/', ''),
    },
    { from: './static/manifest.json' },
    { from: './static/favicon.png' },
    { from: './static/favicon.ico' },
  ];

  if (sw) {
    paths.push({ from: './src/worker/index.js', to: 'serviceWorker.js' });
  }

  return {
    plugins: [
      new CopyWebpackPlugin(paths),
    ],
  };
};
