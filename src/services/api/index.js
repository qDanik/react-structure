import { Url } from 'lib/Service/index';

window.urls = {
  news: {
    info: '/news/:id',
    list: '/news',
  },
};

export default new Url('/api/v1', window.urls);
