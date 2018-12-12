import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'components/common';
import { TrackVisibility } from './track';

const LazyComponent = ({ children, offset, Loading }) => (
  <TrackVisibility partialVisibility offset={offset || 0} once>
    {({ isVisible }) => (isVisible ? children : (Loading || <Spinner />))}
  </TrackVisibility>
);

LazyComponent.propTypes = {
  children: PropTypes.object.isRequired,
  Loading: PropTypes.object,
  offset: PropTypes.number,
};

export default LazyComponent;
