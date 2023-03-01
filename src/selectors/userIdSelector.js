import { createSelector } from '@reduxjs/toolkit'

const getUser = state => state.user

const userIdSelector = createSelector([getUser], (user) => {
  return user.id
})

export default userIdSelector
