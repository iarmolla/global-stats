import { createSelector } from '@reduxjs/toolkit'

const getSignupResponse = state => state.signupResponse

const signupResponseSelector = createSelector([getSignupResponse], (signupResponse) => {
  return signupResponse
})

export default signupResponseSelector