import actionTypes from '../actionTypes'

function getGameFetch(id) {
  return {
    type: actionTypes.GAME_FETCH,
    id
  }
}

function getGameFetchSuccess(game) {
  return {
    type: actionTypes.GAME_FETCH_SUCCESS,
    game,
  };
}

function getGameFetchFailed(errorMessage) {
  return {
    type: actionTypes.GAME_FETCH_FAILED,
    errorMessage,
  };
}

function searchGames(query) {
  return {
    type: actionTypes.GAME_SEARCH,
    query
  }
}

function searchGamesSuccess(games) {
  return {
    type: actionTypes.GAME_SEARCH_SUCCESS,
    games,
  };
}
function searchGamesFailed(errorMessage) {
  return {
    type: actionTypes.GAME_SEARCH_FAILED,
    errorMessage
  }
}

function getUserFetch(id) {
  return {
    type: actionTypes.USER_FETCH,
    id
  }
}
function getUserFetchSuccess(user) {
  return {
    type: actionTypes.USER_FETCH_SUCCESS,
    user
  }
}
function getUserFetchFailed(error) {
  return {
    type: actionTypes.USER_FETCH_FAILED,
    error
  }
}
export default {
  getGameFetch,
  getGameFetchFailed,
  getGameFetchSuccess,
  getUserFetch,
  getUserFetchSuccess,
  getUserFetchFailed,
  searchGames,
  searchGamesFailed,
  searchGamesSuccess,
};
