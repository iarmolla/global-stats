import React from 'react'
import PrelandingView from '../views/prelanding'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions/userActions'
import userSelector from '../selectors/userSelector'

const mapDispatchToProps = dispatch => {
  return {
    trackGame: data => dispatch(actions.getTrackGame(data))
  }
}

const mapStateToProps = state => {
  return {
    user: userSelector(state)
  }
}

const PrelandingContainer = ({...props}) => {
  return <PrelandingView 
    trackGame={props.trackGame}
    user={props.user}/>
}

PrelandingContainer.propTypes = {
  trackGame: PropTypes.func,
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PrelandingContainer)