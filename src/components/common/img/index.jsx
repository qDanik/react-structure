import React from 'react';
import PropTypes from 'prop-types';
import ReactImg from 'react-image';
import { Spinner, SVG } from 'components/common';

import ImageNotFound from 'assets/image/ImageNotFound.svg';

export const IMG = (props) => {
  const properties = { ...(props.className && { className: props.className }) };

  const unLoader = <SVG src={props.notFoundImage} {...properties} width="100%" height="120px" margin="0 auto" />;

  return <ReactImg src={props.src} alt={props.alt} loader={<Spinner />} unloader={unLoader} {...properties} />;
};

IMG.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  notFoundImage: PropTypes.string,
};

IMG.defaultProps = { alt: 'Image', notFoundImage: ImageNotFound, className: '' };
