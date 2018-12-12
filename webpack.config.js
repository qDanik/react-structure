const Development = require('./webpack/dev');
const Production = require('./webpack/prod');

module.exports = () => {
  let mode = 'dev';
  if (typeof process.env.npm_lifecycle_event !== 'undefined') {
    mode = process.env.npm_lifecycle_event;
  }

  switch (mode) {
    case 'prod':
      return Production;
    default:
      return Development;
  }
};
