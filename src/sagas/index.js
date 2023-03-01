import { all, fork } from 'redux-saga/effects';
import chatSaga from './chatSagas';
import gamesSaga from './gameSagas'
import usersSaga from './usersSagas'

function* rootSaga () {
  yield all([
    fork(usersSaga),
    fork(gamesSaga),
    fork(chatSaga),
  ]);
}

export default rootSaga
