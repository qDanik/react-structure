import 'polyfills';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import Di from 'services';
import theme from 'services/themes';
import loadable from '@loadable/component';
import { Desktop, Mobile } from 'services/responsive';
import { Spinner } from 'components/common';

const DesktopRoutes = loadable(() => import(/* webpackChunkName: 'desktop' */'routes'), { fallback: <Spinner /> });
const MobileRoutes = loadable(() => import(/* webpackChunkName: 'mobile' */'routes.mobile'), { fallback: <Spinner /> });

const Routes = () => (
  <Fragment>
    <Desktop>
      <DesktopRoutes />
    </Desktop>
    <Mobile>
      <MobileRoutes />
    </Mobile>
  </Fragment>
);

const App = () => (
  <Provider store={Di.store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={Di.browserHistory}>
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js', { scope: '/', type: 'module', updateViaCache: 'all' })
    .then(worker => worker.update())
    .catch((err) => { throw err; });
}
