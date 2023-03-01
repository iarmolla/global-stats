import actionTypes from '../actionTypes'

function initialize(values) {
  return {
    type: actionTypes.NAVBAR_INITIALIZE,
    values,
  }
}

function onFriendSelected(friendId) {
  return {
    type: actionTypes.NAVBAR_FRIEND_SELECTED,
    friendId,
  }
}

export default {
  initialize,
  onFriendSelected,
}