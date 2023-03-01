import actionTypes from '../actionTypes'

function getUserFetch(values) {
  return {
    type: actionTypes.LOGIN_USER_FETCH,
    values,
  }
}

function getUserFetchSuccess(navigate, user) {
  return {
    navigate,
    type: actionTypes.LOGIN_USER_FETCH_SUCCESS,
    user,
  }
}

function getUserFetchFailed(errorMessage) {
  return {
    type: actionTypes.LOGIN_USER_FETCH_FAILED,
    errorMessage
  }
}

function getSignup(user) {
  return {
    type: actionTypes.SIGNUP_USER,
    user
  }
}

function getSignupResponse(signupResponse){
  return {
    type: actionTypes.SIGNUP_USER_SUCCESS,
    signupResponse
  }
}

function getBanUser(id) {
  return {
    type: actionTypes.GET_USER,
    id
  }
}

function getBanUserFailed(errorMessage) {
  return {
    type: actionTypes.GET_USER_FAILED,
    errorMessage
  }
}
function getTrackGame(data){
  return {
    type: actionTypes.TRACK_GAME,
    data
  }
}

function getTrackGameSuccess(data){
  return {
    type: actionTypes.TRACK_GAME_SUCCESS,
    data
  }
}

function getTrackGameFailed(errorMessage){
  return {
    type: actionTypes.TRACK_GAME_FAILED,
    errorMessage
  }
}

function getBanUserSuccess(user) {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    user
  }
}

function banUser(id) {
  return {
    type: actionTypes.BAN_USER,
    id
  }
}

function banUserFailed(errorMessage) {
  return {
    type: actionTypes.BAN_USER_FAILED,
    errorMessage
  }
}

function banUserSuccess() {
  return {
    type: actionTypes.BAN_USER_SUCCESS,
  }
}

export default {
  getUserFetch,
  getUserFetchSuccess,
  getUserFetchFailed,
  getSignup,
  getSignupResponse,
  getBanUser,
  getBanUserFailed,
  getBanUserSuccess,
  banUser,
  banUserFailed,
  banUserSuccess,
  getTrackGame,
  getTrackGameSuccess,
  getTrackGameFailed,
}