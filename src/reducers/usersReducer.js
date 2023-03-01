import actionTypes from '../actionTypes'
import { Cookies } from '../auth/cookies/cookie'

const initialState = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  accessToken: '',
  track: []
}

function saveUser(state, user) {
  return {
    ...state,
    ...user,
  }
}

function saveGameUser(state, user) {
  return {
    ...state,
    ...user,
  }
}

function storeCachedUser(state) {
  return {
    ...state,
    ...JSON.parse(Cookies.get('user'))
  }
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_FETCH_SUCCESS:
      return saveUser(state, action.user)
    case actionTypes.USER_FETCH_SUCCESS:
      return saveGameUser(state, action.user)
    case actionTypes.NAVBAR_INITIALIZE:
      return storeCachedUser(state)
    default:
      return state
  }
}
