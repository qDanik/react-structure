import { Services } from './Services';
import { _services, _sharedInstance, _di } from '../symbols';

/**
 * @class Factory
 * @property {Cookies} cookies
 * @property {Url} url
 * @property {Query} query
 * @property {Connection} connection
 * @property {Cipher} cipher
 */
class Factory {
  [_services] = [];

  [_sharedInstance] = [];

  constructor() {
    window[_di] = this;
  }

  has = name => !!this[name];

  set = (name, callback, shared = false) => {
    const service = new Services(name, callback, shared);

    if (shared) {
      window[name] = service.call();
      this[_sharedInstance] = { ...this[_sharedInstance], [name]: service };
    }

    this[_services] = { ...this[_services], [name]: service };
    this[name] = service.call();

    return this;
  };

  setShared = (name, callback) => this.set(name, callback, true);

  getService = name => (this.has(name) ? this[_services][name] : false);

  getServices = (shared = false) => (shared ? this[_services] : this[_sharedInstance]);

  remove = (name) => {
    if (this.has(name)) {
      return delete this[_services][name];
    }

    return false;
  };
}

export const Di = new Factory();
