import { combineReducers } from 'redux';
import * as actions from './constants';

function user(state = null, action) {
  switch (action.type) {
    case actions.FETCHED_USER:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function token(state = null, action) {
  switch (action.type) {
    case actions.GOT_TOKEN:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function authError(state = null, action) {
  switch (action.type) {
    case actions.AUTH_FAILED:
      return action.payload;
    case actions.LOGOUT:
    case actions.GOT_TOKEN:
    case actions.FETCHED_USER:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  user,
  token,
  authError
});