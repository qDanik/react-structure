import { _cookies } from '../symbols';

export class Cookies {
  [_cookies] = {};

  cookies = document.cookie.split(';');

  isEmpty = document.cookie.trim().length === 0;

  isEnabled = navigator.cookieEnabled;

  constructor() {
    this.parse();
  }

  /**
   * Cookie option as string
   * @param name
   * @param value
   * @returns {string}
   */
  cookieOption = (name, value) => `${name}=${value};`;

  /**
   * set cookie
   * @param name
   * @param value
   * @param expire
   * @param path
   * @param domain
   * @param secure
   * @returns {*}
   */
  set(name, value = null, expire = 0, path = '/', domain = null, secure = null) {
    if (!this.isEnabled) {
      return false;
    }

    const options = { expire, path, secure, domain };
    const validateOption = key => (options[key] ? this.cookieOption(key, options[key]) : '');

    document.cookie = Object.keys(options).reduce((cookies, key) => cookies + validateOption(key), this.cookieOption(name, value));

    return this.parse();
  }

  /**
   * get cookie by name
   * @param name
   * @returns {boolean}
   */
  get = name => (this.has(name) ? this[_cookies][name].value : false);

  /**
   * Check cookie by name
   * @param name
   * @returns {boolean}
   */
  has = (name) => {
    this.parse();
    return this[_cookies][name] ? this[_cookies][name] : false;
  };

  /**
   * list of cookies
   * @returns {*}
   */
  list = () => this.parse();

  /**
   * Parse cookie to object
   * @returns {*}
   */
  parse() {
    this[_cookies] = {};
    if (this.isEmpty) {
      return this[_cookies];
    }

    this[_cookies] = this.convertCookies().reduce((result, { 0: name, 1: value }) => ({ ...result, [name]: { name, value } }), {});

    return this[_cookies];
  }

  convertCookies = () => this.cookies.map(cookieString => cookieString.trim().split('='));

  /**
   * remove cookie(set value = null, expire = 0)
   * @param name
   * @returns {boolean}
   */
  delete = name => (this.has(name) ? this.set(name) : false);

  /**
   * Reset all cookies
   * @returns {Cookies}
   */
  reset = () => {
    document.cookie = '';
    this[_cookies] = {};
    return this;
  };
}
