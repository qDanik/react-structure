import 'jsdom-global/register';

import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'services/themes';
import Di from 'services';
import { ConnectedRouter } from 'connected-react-router';

configure({ adapter: new Adapter() });

const HOCProvider = node => (
  <Provider store={Di.store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={Di.browserHistory}>
        {node}
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

global.Di = Di;
global.render = (node, ...options) => render(HOCProvider(node), ...options);
global.shallow = (node, ...options) => shallow(HOCProvider(node), ...options);
global.mount = (node, ...options) => mount(HOCProvider(node), ...options);
