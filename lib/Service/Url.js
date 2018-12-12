import Di from 'services';
import toCamelCase from 'Service/CamelCase';
import fetch from './fetch';

const DEFAULT_METHOD = 'GET';
const CIPHER_STATUS = process.env.CIPHER_STATUS === 'true';

export class Url {
  baseUrl = 'www.example.com';

  urls = {};

  headers = { 'Content-Type': 'application/json' };

  constructor(baseUrl, urls) {
    this.setBaseUrl(baseUrl || this.baseUrl);
    this.setUrls(urls || this.urls);
    this.createFetch();
  }

  createFetch = () => {
    this.fetch = fetch.create({
      baseURL: this.getBaseUrl(),
      headers: this.headers,
      withCredentials: true,
    });
  };

  injectParams = (url, params) => Object.keys(params).reduce((result, key) => result.replace(`:${key}`, params[key]), url);

  /**
   * Get url, when indicate method return fetch request with your method
   * @param {string} path
   * @param {object} options
   * @returns {*}
   */
  request = (path, options = {}) => {
    let url = this.findUrl(path);
    const method = options.method || DEFAULT_METHOD;
    const { params, urlParams } = options;
    if (urlParams) {
      url = this.injectParams(url, urlParams);
    }

    return this.requestByOptions({ method, url, options: { params } });
  };

  get = (name, url = this.urls) => (url[name] ? url[name] : false);

  getUrl = path => `${this.getBaseUrl()}${this.findUrl(path)}`;

  findUrl = path => path.split('.').reduce((result, value) => this.get(value, result), this.urls);

  getBaseUrl = () => this.baseUrl;

  setUrls = (values) => {
    this.urls = { ...this.urls, ...values };
    return this;
  };

  setHeader = (name, value) => {
    this.headers[name] = value;
    this.createFetch();
  };

  setBaseUrl = (value) => {
    this.baseUrl = value;
    return this;
  };

  decrypt = (response) => {
    let { data } = response;
    if (CIPHER_STATUS) {
      const decrypted = Di.cipher.decrypt(data);
      try {
        data = toCamelCase(JSON.parse(decrypted), { deep: true });
      } catch (e) {
        data = decrypted;
      }
    }
    data = typeof data === 'object' ? toCamelCase(data, { deep: true }) : data;

    return { ...response, data };
  };

  requestByOptions = ({ method, options, url }) => {
    const callback = this.fetch[method.toLowerCase()];

    return callback(url, options.params).then(this.decrypt);
  }
}
