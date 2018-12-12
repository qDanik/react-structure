import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinBack = keyframes`
  from { transform: rotate(-0deg); }
  to { transform: rotate(-360deg); }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height};
`;

const Spinner = styled.span`
  position: absolute;
  display: block;
  width: 45px;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.palette.primary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${SpinBack} 2s linear infinite;
`;

const SpinnerMedium = styled.span`
  position: absolute;
  width: 35px;
  height: 35px;
  border: 1.5px solid ${({ theme }) => theme.palette.secondary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${Spin} 1s linear infinite;
`;

const SpinnerSmall = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border: 1.5px solid ${({ theme }) => theme.palette.orange};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${SpinBack} 1s linear infinite;
`;

const SpinnerComponent = ({ height }) => (
  <Container height={height}>
    <Spinner />
    <SpinnerMedium />
    <SpinnerSmall />
  </Container>
);

SpinnerComponent.propTypes = { height: PropTypes.string };

SpinnerComponent.defaultProps = { height: '70px' };

export default SpinnerComponent;
