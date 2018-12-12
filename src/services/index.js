import { Di } from 'Di';
import { Cookies, Cipher } from 'Service';
import configureStore from 'store';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

Di.setShared('browserHistory', browserHistory);

Di.setShared('cookies', Cookies);

Di.setShared('cipher', new Cipher());

const store = configureStore(Di);
Di.setShared('store', store);

// Di.setShared('socket', () => {
// return io.connect('http://127.0.0.1:2020');
// });

/**
 * @property {i18next} i18n
 * @property {Modal} modal
 * @property {Cipher} cipher
 * @property {browserHistory} browserHistory
 */
export default Di;

window.di = Di;
