import i18n from 'i18next';
import Cache from 'i18next-localstorage-cache';

import ru from './locales/ru.json';
import en from './locales/en.json';

i18n
  .use(Cache)
  .init({
    initImmediate: false,
    interpolation: { escapeValue: false },
    lng: 'ru',
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    useLocalStorage: true,
    useCookie: true,
  });

export default i18n;
