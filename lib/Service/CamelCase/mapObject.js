const isObject = x => typeof x === 'object'
  && x !== null
  && !(x instanceof RegExp)
  && !(x instanceof Error)
  && !(x instanceof Date);

export const mapObject = (object, fn, options, seen) => {
  options = {
    deep: false,
    target: {},
    ...options,
  };

  seen = seen || new WeakMap();

  if (seen.has(object)) {
    return seen.get(object);
  }

  seen.set(object, options.target);

  const { target } = options;
  delete options.target;

  const mapArray = array => array.map(x => (isObject(x) ? mapObject(x, fn, options, seen) : x));
  if (Array.isArray(object)) {
    return mapArray(object);
  }

  return Object.keys(object).reduce((result, key) => {
    const value = object[key];
    const [newKey, newValue] = fn(key, value, object);

    if (options.deep && isObject(newValue)) {
      target[newKey] = Array.isArray(newValue)
        ? mapArray(newValue)
        : mapObject(newValue, fn, options, seen);
      return target;
    }

    target[newKey] = newValue;
    return target;
  }, target);
};
