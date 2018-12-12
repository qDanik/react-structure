import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import defaultTheme from 'services/themes';
import { createGlobalStyle } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Fonts } from 'assets/fonts';

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 300px;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  body {
    margin: calc(${({ theme }) => theme.sizes.header} - 10px) 0 calc(${({ theme }) => theme.sizes.footer} - 10px);
    padding: 0;
    color: ${({ theme }) => theme.palette.third};
    background: ${({ theme }) => theme.palette.grayHover};
  }
  
  *, *::before, *::after {
    font-family: ${defaultTheme.fonts.primary};
    box-sizing: border-box;
    outline: none;
  }
  
  a { 
    color: ${({ theme }) => theme.palette.primary};
    text-decoration: none; 
  }
  
  ${Fonts}
`;

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { location: prevLocation } = prevProps;

    if (location !== prevLocation) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default withRouter(MainLayout);
