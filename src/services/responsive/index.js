import React from 'react';
import Responsive from 'react-responsive';

const DESKTOP_MIN_WIDTH = 1101;
const MOBILE_MAX_WIDTH = 767;

export const Desktop = props => <Responsive {...props} minWidth={DESKTOP_MIN_WIDTH} />;
export const Tablet = props => <Responsive {...props} minWidth={MOBILE_MAX_WIDTH + 1} maxWidth={DESKTOP_MIN_WIDTH - 1} />;
export const Mobile = props => <Responsive {...props} maxWidth={DESKTOP_MIN_WIDTH - 1} />;
export const Default = props => <Responsive {...props} minWidth={MOBILE_MAX_WIDTH + 1} />;
