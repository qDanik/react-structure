import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'react-inlinesvg';
import styled from 'styled-components';
import { Spinner } from 'components/common';

const CustomSVG = styled(InlineSVG)`
  display: inline-block;
  font-size: 0;
  margin: ${({ margin }) => margin};
  
  svg {
    display: block;
    width: ${({ width, size }) => width || size || 'auto'};
    height: ${({ height, size }) => height || size || 'auto'};
    transition: .3s;
  }
`;

export const SVG = (props) => {
  const { src } = props;
  if (src.match(/\.svg$/)) {
    return <img src={src} alt={src} />;
  }

  return (
    <CustomSVG src={src} preloader={<Spinner />} {...props}>
      <img src={src} alt={src} />
    </CustomSVG>
  );
};

SVG.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
  margin: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

SVG.defaultProps = { margin: '0' };
