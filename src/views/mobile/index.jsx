import { IMG } from 'components/common/img/index';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeName } from 'store/actions/init';
import styled from 'styled-components';
import LogoImage from 'assets/image/logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

const Input = styled.input.attrs({ type: 'text' })`
  font-size: 18px;
  font-weight: 500;
`;

const Logo = styled(IMG)`
  width: 150px;
  height: 150px;
`;

class DesktopIndex extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    rename: PropTypes.func.isRequired,
  };

  handleChangeName = ({ target }) => {
    this.props.rename(target.value);
  };

  render() {
    const { name } = this.props;
    return (
      <Container>
        <Logo src={LogoImage} />
        <Text>Hello {name} at mobile version!</Text>
        <Input value={name} onChange={this.handleChangeName} />
      </Container>
    );
  }
}

export default connect(state => ({ name: state.init.name }), { rename: changeName })(DesktopIndex);
