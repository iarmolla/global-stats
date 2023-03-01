import actionTypes from '../actionTypes'

const initialState = {
  message:''
}

export default function signupResponseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_USER_SUCCESS:
      return {
        ...initialState,
        ...action.signupResponse,
      }
    default:
      return state
  }
}