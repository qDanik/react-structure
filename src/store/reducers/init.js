import { handleActions } from 'redux-actions';
import { changeNameSuccess } from 'store/actions/init';

const initialState = { name: 'Username' };

export default handleActions({ [changeNameSuccess]: (state, { payload: name }) => ({ ...state, name }) }, initialState);
