export { default as SeoText } from './seoText';
export { SVG } from './svg';
export { IMG } from './img';
export { default as Spinner } from './spinner';
export { default as LazyComponent } from './lazyComponent';

export const isActiveLink = (link, location = window.location) => {
  if (link === null || (link.url.length === 0 && location.pathname.length > 0)) return false;

  return ~location.pathname.indexOf(link.url) || link.url === location.pathname;
};
