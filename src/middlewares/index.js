import { all, fork } from 'redux-saga/effects';
import redirectMiddleware from './redirectMiddleware'
import cookiesMiddleware from './cookiesMiddleware'

function* rootMiddleware () {
  yield all([
    fork(redirectMiddleware),
    fork(cookiesMiddleware),
  ]);
}

export default rootMiddleware
