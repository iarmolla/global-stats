import actionTypes from '../actionTypes'

const initialState = {}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GAME_SEARCH_SUCCESS:
      return {
        ...initialState,
        ...action.games,
      };
    default:
      return state;
  }
}
