import { Fonts } from 'assets/fonts';
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import defaultTheme from 'services/themes';
import { withRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 20px;
    color: ${({ theme }) => theme.palette.third};
    background: ${({ theme }) => theme.palette.body};
    min-width: 320px;
  }
  
  *, *::before, *::after {
    font-family: ${defaultTheme.fonts.primary};
    box-sizing: border-box;
    outline: none;
  }
  
  a { text-decoration: none; }
  
  ${Fonts}
`;


class MainLayout extends Component {
  static propTypes = { children: PropTypes.node };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        {children}
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default withRouter(MainLayout);
