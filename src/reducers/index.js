import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

function friendList(state = {
  list: [],
  isFetching: false
}, action) {
  switch(action.type) {
    case types.REQUEST_FRIEND_LIST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_FRIEND_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // Add your reducer
  friendList
});

export default rootReducer;
