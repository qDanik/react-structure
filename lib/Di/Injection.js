import React from 'react';
import { _di } from '../symbols';

export const Injection = ComponentToInjection => class extends React.Component {
  constructor(props = {}) {
    super(props);
    /**
     * @property {Di} di
     */
    this.di = window[_di];
  }

  render() {
    const props = {
      ...this.props,
      ...this.di.getServices(true),
    };

    return <ComponentToInjection {...props} di={this.di} />;
  }
};
