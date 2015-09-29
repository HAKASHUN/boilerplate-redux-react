import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

function requestFriendList() {
  return { type: types.REQUEST_FRIEND_LIST }
}

function receiveFriendList(data) {
  return { type: types.RECEIVE_FRIEND_LIST , list: data.list}
}

export function fetchFriendList() {
  return function(dispatch) {

    dispatch(requestFriendList());

    return fetch("/api/list")
      .then(response => response.json())
      .then(json =>
        dispatch(receiveFriendList(json))
    );
  }
}
