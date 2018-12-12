import camelCase from './camelCase';
import { mapObject } from './mapObject';

const has = (array, key) => array.some(x => (typeof x === 'string' ? x === key : x.test(key)));


const camelCaseConvert = (input, options) => {
  options = {
    deep: false,
    ...options,
  };
  const { exclude } = options;
  const cache = {};

  return mapObject(input, (key, value) => {
    if (!(exclude && has(exclude, key))) {
      if (cache[key]) {
        key = cache[key];
      } else {
        const ret = camelCase(key);
        if (key.length < 100) {
          cache[key] = ret;
        }

        key = ret;
      }
    }

    return [key, value];
  }, { deep: options.deep });
};

export default (input, options) => (Array.isArray(input) ? Object.keys(input).map(key => camelCaseConvert(input[key], options)) : camelCaseConvert(input, options));
