import actionTypes from '../actionTypes'

const initialState = {
  createdAt: '',
  friendId: 0,
  id: 0,
  messages: [],
  originalChatId: 0,
  userId: 0,
  isReady: false,
}

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHAT_FETCH_MESSAGES_SUCCESS:
      return {
        ...initialState,
        ...action.chat
      };
    case actionTypes.NAVBAR_FRIEND_SELECTED:
      return initialState
    default:
      return state;
  }
}
