import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as modal } from 'redux-modal';

import init from './reducers/init'

export default history => combineReducers({
  init,
  modal,
  router: connectRouter(history),
});
