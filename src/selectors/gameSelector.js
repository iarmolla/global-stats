import { createSelector } from '@reduxjs/toolkit'

const getGame = state => state.game

const gameSelector = createSelector([getGame], (game) => {
  return game
})

export default gameSelector