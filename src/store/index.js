import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducers from './reducers';

/**
 * Store configure
 * @param di
 * @returns {Store<*, Action> & {dispatch: any}}
 */
export default function configureStore(di = null) {
  const reducers = createReducers(di.browserHistory);
  const middleware = compose(applyMiddleware(thunk.withExtraArgument(di), routerMiddleware(di.browserHistory)));

  if (DEVELOPMENT) {
    return createStore(reducers, composeWithDevTools(middleware));
  }
  return createStore(reducers, middleware);
}
