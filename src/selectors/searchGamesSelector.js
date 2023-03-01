import { createSelector } from '@reduxjs/toolkit'

const searchGames= state => state.games

const searchGamesSelector = createSelector([searchGames], (games) => {
  return games
})

export default searchGamesSelector