import React from 'react'
import PropTypes from 'prop-types'
import GameView from '../views/game'
import { connect } from 'react-redux'
import gameSelector from '../selectors/gameSelector'
import actions from '../actions/gameActions'

const mapDispatchToProps = dispatch => {
  return {
    loadGame: id => dispatch(actions.getGameFetch(id)),
  }
}

const mapStateToProps = state => {
  return {
    game: gameSelector(state)
  }
}

const GameContainer = ({...props}) => {
  return <GameView
    loadGame={props.loadGame}
    game={props.game}
  />
}

GameContainer.propTypes = {
  loadGame: PropTypes.func,
  game: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
