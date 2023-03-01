import { takeLatest } from 'redux-saga/effects'
import actionTypes from '../actionTypes';

function gotoPrelanding(action) {
  action.navigate("/prelanding")
}

function* redirectMiddleware() {
  yield takeLatest(actionTypes.LOGIN_USER_FETCH_SUCCESS, gotoPrelanding)
}

export default redirectMiddleware
