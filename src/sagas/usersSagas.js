import { put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import userSync from '../syncs/userSync'
import actions from '../actions/userActions'

function* createUser(action) {
  try {
    const response = yield userSync.saveUser(action.user)
    yield put(actions.getSignupResponse(response))
  } catch (error) {
    yield put(actions.getUserFetchFailed(error.message))
  }
}

function* loginUser(action) {
  try {
    const response = yield userSync.loginUser(action.values)
    const friends = yield userSync.getFriends(response.id)
    yield put(actions.getUserFetchSuccess(action.navigate, { ...response, friends }))
  } catch (error) {
    yield put(actions.getUserFetchFailed(error.message))
  }
}

function* getUser(action) {
  try {
    const response = yield userSync.getAdminUser(action.id)
    yield put(actions.getBanUserSuccess(response))
  } catch (error) {
    yield put(actions.getBanUserFailed(error.message))
  }
}

function* banUser(action) {
  try {
    const response = yield userSync.banUser(action.id)
    yield put(actions.banUserSuccess(response))
  } catch (error) {
    yield put(actions.banUserFailed(error.message))
  }
}

function* addGameStats(action) {
  try {
    const response = yield userSync.addGameStats(action.data)
    yield put(actions.getTrackGameSuccess(response))
  } catch (error) {
    yield put(actions.getTrackGameFailed(error.message))
  }
}

function* usersSaga() {
  yield takeLatest(actionTypes.GET_USER, getUser)
  yield takeLatest(actionTypes.BAN_USER, banUser)
  yield takeLatest(actionTypes.LOGIN_USER_FETCH, loginUser)
  yield takeLatest(actionTypes.SIGNUP_USER, createUser)
  yield takeLatest(actionTypes.TRACK_GAME, addGameStats)
}


export default usersSaga