import { css } from 'styled-components';

import Regular from './Roboto/Roboto-Regular.ttf';
import RegularItalic from './Roboto/Roboto-Italic.ttf';

export const Fonts = css`
  
  // Regular
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Robot'), url(${Regular}) format("truetype");
  }
  
  @font-face {
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Robot'), url(${RegularItalic}) format("truetype");
  }
`;
