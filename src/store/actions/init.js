import { createAction } from 'redux-actions';

export const changeNameSuccess = createAction('@init/name/cs');

export const changeName = (name) => (dispatch) => dispatch(changeNameSuccess(name));
