/* eslint-disable */
const date = new Date();
const CACHE_RESOURCE = `RESOURCE-v${date.getFullYear()}.${date.getMonth()}`;
const CACHE_REQUEST = `REQUEST-v${date.getFullYear()}.${date.getMonth()}`;
const CACHE_TIME = 60;

class ClientFallback {
  static page() {
    return `<html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="theme-color" content="#211B31"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>React App</title>
      <link rel="icon" type="image/png" href="data:image/png;base64">
      <link rel="apple-touch-icon" type="image/png" href="data:image/png;base64">
      <style>
        body {
          font-family: sans-serif;
          overflow: hidden;
        }
        
        .container {
          display: flex; 
          align-items: center; 
          justify-content: center; 
          flex-direction: column; 
          text-align: center
        }
        
        header {
          width: 100%;
          padding: 10px;
          margin: 0 0 35px;
          background: #211B31;
          box-shadow: 0 0 10px rgba(0,0,0,.4);
        }
        
        h2 {
          margin: 25px 0;
          max-width: 500px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <svg width="250" height="225" viewBox="0 0 256 230" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
            <path d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955
            64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481
            48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996
            19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
                  fill="#FFF"/>
          </svg>
        </header>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="200" height="100" viewBox="0 0 500 500" xml:space="preserve">
              <path d="M431.955,324.368V24c0-13.255-10.745-24-24-24h-368c-13.255,0-24,10.745-24,24v368c0,13.255,10.745,24,24,24h251.368
                c13.317,46.741,62.004,73.837,108.745,60.52c37.77-10.761,63.837-45.247,63.888-84.52
                C464.023,365.786,452.267,340.939,431.955,324.368z M298.859,349.632c-0.336,0.616-0.64,1.256-0.968,1.88
                c-0.992,1.888-1.928,3.808-2.784,5.776c-0.184,0.424-0.352,0.856-0.528,1.288c-0.928,2.213-1.76,4.475-2.496,6.784
                c-0.104,0.328-0.208,0.64-0.304,0.968c-0.731,2.368-1.352,4.781-1.864,7.24c-0.08,0.368-0.176,0.728-0.248,1.104
                c-0.072,0.376-0.232,0.928-0.312,1.4c-0.144,0.8-0.152,1.6-0.272,2.4c-0.392,2.528-0.68,5.072-0.856,7.664
                c-0.08,1.192-0.144,2.4-0.176,3.56c0,0.8-0.12,1.544-0.12,2.328c0,2.072,0.168,4.144,0.312,6.216v1.784L39.955,400
                c-4.418,0-8-3.582-8-8V24c0-4.418,3.582-8,8-8h368c4.418,0,8,3.582,8,8v289.656l-0.176-0.072
                c-7.025-3.589-14.508-6.199-22.24-7.76l-0.8-0.168c-3.698-0.72-7.44-1.198-11.2-1.432c-0.424,0-0.856,0-1.28-0.056
                c-1.456-0.064-2.872-0.168-4.304-0.168c-1.824,0-3.608,0.168-5.408,0.272c-0.6,0.04-1.192,0-1.784,0
                c-0.328,0-0.648,0.088-0.976,0.12c-0.976,0.088-1.928,0.232-2.896,0.36c-1.696,0.216-3.384,0.456-5.064,0.8
                c-1.232,0.232-2.448,0.504-3.664,0.8c-1.216,0.296-2.4,0.592-3.592,0.92c-1.6,0.44-3.12,0.896-4.656,1.408l-1.44,0.528
                c-18.759,6.727-34.693,19.596-45.216,36.52C300.459,347.016,299.659,348.296,298.859,349.632z M375.955,464L375.955,464
                c-34.185-0.083-63.63-24.122-70.552-57.6c-0.478-2.329-0.836-4.682-1.072-7.048c-0.048-0.48,0-0.96-0.08-1.44
                c-0.152-1.872-0.272-3.752-0.28-5.6c0-0.736,0.064-1.48,0.08-2.216c0.048-1.664,0.096-3.328,0.256-4.96
                c0.064-0.736,0.192-1.472,0.288-2.208c0.224-1.768,0.456-3.544,0.8-5.272c0-0.128,0.056-0.256,0.088-0.384
                c0.464-2.232,1.024-4.432,1.696-6.584v-0.112c0.688-2.187,1.472-4.32,2.352-6.4l0.096-0.224c0.856-2.008,1.808-4,2.832-5.872
                c0.08-0.152,0.152-0.304,0.232-0.448c1.016-1.864,2.128-3.672,3.304-5.432c0.736-1.096,1.536-2.136,2.328-3.2
                c0.464-0.616,0.912-1.256,1.4-1.864c1.096-1.36,2.256-2.672,3.448-3.952l0.408-0.448c7.738-8.143,17.24-14.402,27.776-18.296
                c0.592-0.216,1.176-0.456,1.776-0.656c1.136-0.384,2.288-0.712,3.44-1.04c1.152-0.328,2.192-0.592,3.304-0.848
                c0.904-0.208,1.816-0.408,2.736-0.584c1.456-0.272,2.928-0.488,4.416-0.672c0.712-0.088,1.424-0.2,2.136-0.264
                c1.552-0.144,3.128-0.2,4.704-0.24c0.8,0,1.656-0.096,2.48-0.088c0.504,0,0.992,0.048,1.488,0.064
                c1.6,0.04,3.272,0.112,4.888,0.272c0.504,0.048,0.992,0.12,1.488,0.176c1.6,0.192,3.264,0.416,4.872,0.72
                c0.44,0.08,0.872,0.176,1.312,0.264c1.648,0.344,3.288,0.736,4.912,1.192l1.208,0.352c1.6,0.48,3.2,1.032,4.8,1.6
                c0.4,0.152,0.8,0.296,1.208,0.456c1.536,0.616,3.048,1.304,4.544,2.024l1.28,0.608c1.464,0.744,2.888,1.6,4.296,2.4
                c0.416,0.24,0.84,0.464,1.248,0.72c1.776,1.112,3.512,2.288,5.192,3.56h0.048c18.217,13.503,28.919,34.869,28.824,57.544
                C447.911,431.746,415.701,463.956,375.955,464z"/>
              <path d="M359.955,64h-272v176h48v32h32v32h112v-32h32v-32h48V64z M343.955,224h-48v32h-32v32h-80v-32h-32v-32h-48V80h16v56h16V80
                h16v56h16V80h16v56h16V80h16v56h16V80h16v56h16V80h16v56h16V80h16v56h16V80h16V224z"/>
              <rect x="63.955" y="352" width="160" height="16"/>
              <rect fill="#d71404" x="239.955" y="352" width="32" height="16"/>
              <path fill="#d71404" d="M413.211,417.944L387.267,392l25.944-25.944c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0
                l-25.944,25.944l-25.944-25.944c-3.07-3.178-8.134-3.266-11.312-0.196c-3.178,3.07-3.266,8.134-0.196,11.312
                c0.064,0.066,0.129,0.132,0.196,0.196L364.643,392l-25.944,25.944c-3.178,3.07-3.266,8.134-0.196,11.312
                c3.07,3.178,8.134,3.266,11.312,0.196c0.066-0.064,0.132-0.129,0.196-0.196l25.944-25.944l25.944,25.944
                c3.07,3.178,8.134,3.266,11.312,0.196c3.178-3.07,3.266-8.134,0.196-11.312C413.343,418.073,413.277,418.008,413.211,417.944z"/>
        </svg>
        <h2>You do not have an internet connection, please resolve this issue.</h2>
      </div>
    </body>
  </html>`;
  }

  /**
   * @returns {Promise<Response>}
   */
  static get() {
    return Promise.resolve(new Response(ClientFallback.page(), {
      status: 200,
      statusText: 'Service Worker Fallback',
      headers: {'Content-Type': 'text/html; charset=utf-8'}
    }));
  }
}

/**
 * Class for client side caching
 */
class ClientCache {

  /**
   * return true when client send request to resource
   * @param request
   * @returns {number}
   */
  static isResource(request) {
    return ~['image', 'script', 'font', 'manifest', 'style'].indexOf(request.destination);
  }

  /**
   * return true when client requested api data
   * @param request
   * @returns {number}
   */
  static isApi(request) {
    return ~request.url.indexOf('/api/v1');
  }

  /**
   * check what is don't chrome tool
   * @param request
   * @returns {boolean}
   */
  static isNotChromeExtension(request) {
    return request.url.indexOf('chrome') !== 0;
  }

  /**
   * get request type
   * @param request
   * @returns {string}
   */
  static getType(request) {
    return ClientCache.isResource(request) ? CACHE_RESOURCE : CACHE_REQUEST;
  }

  /**
   * Checks to can sw save request to cache or not
   * @param request
   * @returns {number|boolean}
   */
  static has(request) {
    return (ClientCache.isResource(request) || ClientCache.isApi(request)) && ClientCache.isNotChromeExtension(request);
  }

  /**
   * @param time
   * @returns {number}
   */
  static getTimeDiff(time) {
    const now = new Date();
    const timeResponse = new Date(time);

    return Number.parseInt((now - timeResponse) / 1000, 0);
  }

  /**
   * Request time cache 60 seconds
   * @param {Response} response
   * @returns {*}
   */
  static isExpired(response) {
    if(!response || !response.headers) {
      return false;
    }
    const { headers } = response;
    const headerDate = headers.get('date');
    if(!headerDate) {
      return false;
    }

    return ClientCache.getTimeDiff(headerDate) < CACHE_TIME;
  };

  /**
   * get request from cache if matching, else to be set his
   * @param request
   * @returns {Promise<Response | undefined | never>}
   */
  get(request) {
    return caches.open(ClientCache.getType(request)).then(cache => this.findAtCache(cache, request));
  }

  /**
   * Find request at client cache
   * @param cache
   * @param request
   * @returns {*}
   */
  findAtCache(cache, request) {
    return cache.match(request).then((matching) => (ClientCache.isExpired(matching) && matching) || this.set(request, cache));
  }

  /**
   * save response to request at cache
   * @param request
   * @param cache
   * @returns {Promise<Response | never>}
   */
  set(request, cache) {
    return fetch(request).then(response => {
      cache.put(request, response.clone());
      return response;
    });
  }

  /**
   * custom request, init point
   * @param request
   * @returns {any}
   */
  request(request) {
    return !ClientCache.has(request) ? fetch(request) : this.get(request);
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_RESOURCE)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', (event) => {
  const { request } = event;
  const cache = new ClientCache();
  const respond = cache.request(request);

  event.respondWith(respond.catch(err => {
    throw err;
    return ClientFallback.get();
  }));
});
