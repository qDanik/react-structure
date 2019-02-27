class CustomFetch {
  _options = {};

  create = (options) => {
    this._options = options;

    return this;
  };

  getOptions = () => ({
    headers: this._options.headers,
    ...(this._options.withCredentials && ({ credentials: 'include' })),
  });

  getUrl = url => this._options.baseURL + url;

  post = (url, params) => fetch(this.getUrl(url), {
    method: 'post',
    body: JSON.stringify(params),
    ...this.getOptions(),
  }).then(this.toJson);

  get = (url, params) => {
    const query = this.queryString(params);

    return fetch(`${this.getUrl(url)}${query && `?${query}`}`, {
      method: 'get',
      ...this.getOptions(),
    }).then(this.toText);
  };

  toJson = async response => ({
    data: await response.json(),
    status: response.status,
  });

  toText = async response => ({
    data: await response.text(),
    status: response.status,
  });

  queryString = (params, letter = '=', separator = '&') => {
    if (!params) return '';

    const query = Object.keys(params).map((key) => {
      const value = params[key];

      if (typeof value === 'object') {
        const paramValue = this.queryString(value, ':', ',');

        return `${key}={${paramValue}}`;
      }

      const paramName = letter === '=' ? key : JSON.stringify(key);

      return `${paramName}${letter}${JSON.stringify(value)}`;
    });

    return query.join(separator);
  };
}

export default new CustomFetch();
