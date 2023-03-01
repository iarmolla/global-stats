import actionTypes from '../actionTypes'

const initialState = {}

function saveUser(state, user) {
  return {
    ...state,
    ...user,
  }
}

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return saveUser(state, action.user)
    default:
      return state
  }
}
