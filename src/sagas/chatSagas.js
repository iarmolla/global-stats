import { put, select, takeLatest } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import chatSync from '../syncs/chatSync'
import userIdSelector from '../selectors/userIdSelector'
import actions from '../actions/chatActions'

function* getChat(action) {
  try {
    const userId = yield select(userIdSelector)
    const response = yield chatSync.getChat(userId, action.friendId)
    yield put(actions.getChatSuccess({ ...response, isReady: true }))
  } catch (error) {
    yield put(actions.getChatFailed(error.message))
  }
}

function* chatSaga() {
  yield takeLatest([
    actionTypes.CHAT_INITIALIZE,
    actionTypes.NAVBAR_FRIEND_SELECTED,
  ], getChat)
}

export default chatSaga