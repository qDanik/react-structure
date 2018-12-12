import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorIcon from 'assets/image/error/404.svg';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100%;
  margin: 40px 0;
`;

const ErrorImage = styled.div`
  width: 100%;
  height: 360px;
  max-width: 430px;
  margin-right: 80px;
  background: url(${ErrorIcon}) center center no-repeat;
  background-size: contain;
`;

const ErrorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
`;

const ErrorCode = styled.h2`
  margin: 20px 0 10px;
  font-size: 80px;
  font-weight: 600;
  text-transform: uppercase;
`;

const ErrorTitle = styled.p`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

const ErrorDescription = styled.p`
  max-width: 320px;
  margin: 0 0 20px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`;

class Error extends Component {
  static propTypes = {
    errorCode: PropTypes.string,
    errorTitle: PropTypes.string,
    errorText: PropTypes.string,
  };

  static defaultProps = {
    errorCode: '404',
    errorTitle: 'Страница не найдена',
    errorText: 'Возможно, она была удалена или ее никогда не существовало.',
  };

  render() {
    const { errorCode, errorTitle, errorText } = this.props;
    return (
      <ErrorContainer>
        <ErrorImage />
        <ErrorInfoContainer>
          <ErrorCode>{errorCode}</ErrorCode>
          <ErrorTitle>{errorTitle}</ErrorTitle>
          <ErrorDescription>{errorText}</ErrorDescription>
        </ErrorInfoContainer>
      </ErrorContainer>
    );
  }
}

export default Error;
