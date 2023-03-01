import actionTypes from '../actionTypes'

function initialize(friendId) {
  return {
    type: actionTypes.CHAT_INITIALIZE,
    friendId,
  }
}

function getChatSuccess(chat) {
  return {
    type: actionTypes.CHAT_FETCH_MESSAGES_SUCCESS,
    chat,
  }
}

function getChatFailed(error) {
  return {
    type: actionTypes.CHAT_FETCH_MESSAGES_FAILED,
    error,
  }
}

export default {
  initialize,
  getChatSuccess,
  getChatFailed,
}
