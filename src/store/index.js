import { init } from '@rematch/core';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as models from './models';

/**
 * Store configure
 * @param di
 * @returns {RematchStore<Models>}
 */
export default function configureStore(di = null) {
  const config = {
    models,
    redux: {
      devtoolOptions: { disabled: true },
      reducers: { router: connectRouter(di.browserHistory) },
      middlewares: [routerMiddleware(di.browserHistory), thunk.withExtraArgument(di)],
    },
  };

  if (DEVELOPMENT) {
    return init({
      ...config,
      redux: { ...config.redux, devtoolOptions: { disabled: false } },
    });
  }

  return init(config);
}
