import { createSelector } from '@reduxjs/toolkit'

const getChat = state => state.chat

const chatSelector = createSelector([getChat], (chat) => {
  return chat
})

export default chatSelector
