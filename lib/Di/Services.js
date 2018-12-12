import { _name, _shared, _callback } from '../symbols';

export class Services {
  constructor(name, Callback, shared = false) {
    this[_name] = name || false;
    this[_shared] = shared;
    this[_callback] = this.isFunction(Callback) && shared ? new Callback() : Callback;
  }

  isShared = () => this[_shared];

  isFunction = func => typeof func === 'function';

  call() {
    if (this.isFunction(this[_callback]) && !this.isShared()) {
      return this[_callback]();
    }

    return this[_callback];
  }
}
