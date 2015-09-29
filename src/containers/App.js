import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriendList } from '../actions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFriendList());
  }
  render() {
    const { list, isFetching } = this.props;
    return (
      <ul>
        {isFetching && list.length === 0 &&
        <h2>Loading...</h2>
          }
        {list.map((user, index) =>
            <li key={user.id}>{user.name}</li>
        )}
      </ul>
    )
  }
}

function mapStoreToProps(state) {
  const { friendList } = state;
  const {
    isFetching,
    list
    } = friendList || {
    isFetching: true,
    list: []
  };
  return {
    isFetching,
    list
  }
}

export default connect(mapStoreToProps)(App);
