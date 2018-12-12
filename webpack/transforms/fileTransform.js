// eslint-disable-next-line prefer-destructuring
const basename = require('path').basename;

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(basename(filename));

    if (filename.match(/\.svg$/)) {
      return `module.exports = {
        __esModule: true,
        default: ${assetFilename},
        ReactComponent: (props) => ({
          $$typeof: Symbol.for('react.element'),
          type: 'svg',
          ref: null,
          key: null,
          props: Object.assign({}, props, {
            children: ${assetFilename}
          })
        }),
      };`;
    }

    return `module.exports = ${assetFilename};`;
  },
};
