import { createSelector } from '@reduxjs/toolkit'

const getUser = state => state.user

const userSelector = createSelector([getUser], (user) => {
  return user
})

export default userSelector
