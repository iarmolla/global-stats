import { put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import gameSync from '../syncs/gameSync'
import actions from '../actions/gameActions'

function* getGameDetail(action) {
  try {
    const response = yield gameSync.getGame(action.id)
    yield put(actions.getGameFetchSuccess(response))
  } catch (error) {
    yield put(actions.getGameFetchFailed(error.message))
  }
}

function* getUser(id) {
  try {
    const response = yield gameSync.getUser(id)
    yield put(actions.getUserFetchSuccess(response))
  } catch (error) {
    yield put(actions.getGameFetchFailed(error.message))
  }
}
function* searchGames(action) {
  try {
    const response = yield gameSync.searchGame(action.query)
    yield put(actions.searchGamesSuccess(response))
  } catch (error) {
    yield put(actions.searchGamesFailed(error.message))
  }
}

function* gamesSaga() {
  yield takeLatest(actionTypes.USER_FETCH,getUser)
  yield takeLatest(actionTypes.GAME_FETCH, getGameDetail)
  yield takeLatest(actionTypes.GAME_SEARCH, searchGames)
}

export default gamesSaga