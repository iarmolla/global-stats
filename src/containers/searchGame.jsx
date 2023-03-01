import React from 'react'
import SearchGameView from '../views/searchGameView'
import searchGamesSelector from '../selectors/searchGamesSelector'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions/gameActions'

const mapDispatchToProps = dispatch => {
  return {
    searchGame: query => dispatch(actions.searchGames(query)),
  }
}

const mapStateToProps = state => {
  return {
    games:searchGamesSelector(state)
  }
}

const SearchGameContainer=({...props})=> {
  return (
    <SearchGameView 
      searchGame={props.searchGame}
      games={props.games}
    />
  )
}
SearchGameContainer.propTypes = {
  searchGame: PropTypes.func,
  games: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchGameContainer)