import actionTypes from '../actionTypes'

const initialState = {
  id: 0,
  name: "",
  storyline: "",
  summary: "",
  ratingSource: "",
  rating: "",
  totalRating: 0,
  imageUrl: "",
  genres: [],
  releaseDate: "",
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GAME_FETCH_SUCCESS:
      return {
        ...initialState,
        ...action.game,
      }
    default:
      return state
  }
}