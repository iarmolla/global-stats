import { takeLatest } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import { Cookies } from '../auth/cookies/cookie'

function setJWT(action) {
  const jwt = Cookies.get('jwt')
  if (!jwt) {
    Cookies.set('jwt', action.user.accessToken);
    Cookies.set('user', JSON.stringify(action.user));
  }
}

function* cookiesMiddleware() {
  yield takeLatest(actionTypes.LOGIN_USER_FETCH_SUCCESS, setJWT)
}

export default cookiesMiddleware
