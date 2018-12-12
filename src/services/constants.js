import parse from 'date-fns/parse';
import fnsFormat from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import ReactParserHtml from 'htmr';

export default {
  modals: {
    welcome: '@modal/welcome',
    login: '@modal/login',
  },
};
const dateOptions = { locale: ru };

/**
 * @param date
 * @param dateFormat
 */
export const parseDate = (date, dateFormat = 'yyyy-MM-dd HH:mm:ss') => parse(date, dateFormat, new Date(), dateOptions);

/**
 * @param object
 * @returns {string[]}
 */
export const mapObject = object => Object.keys(object);

/**
 * @param date
 * @param dateFormat
 * @returns {string | *}
 */
export const format = (date, dateFormat = 'dd.MM.yyyy') => fnsFormat(date, dateFormat, dateOptions);

export const equalDate = (first, second) => format(first) !== format(second);

/**
 * @param html
 * @returns {Array}
 */
export const parseHtml = html => ReactParserHtml(html);
