import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactHtmlParser from 'htmr';

const SeoContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const SeoTitle = styled.h1`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 700;
`;

const SeoDescription = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: justify;
`;

class SeoText extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  render() {
    const { title, description } = this.props;

    return (
      <SeoContainer>
        <SeoTitle>{title}</SeoTitle>
        <SeoDescription>{ReactHtmlParser(description)}</SeoDescription>
      </SeoContainer>
    );
  }
}

export default SeoText;
