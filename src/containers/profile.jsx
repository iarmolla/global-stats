import React from 'react'
import ProfileView from '../views/profile'
import { connect } from 'react-redux'
import actions from '../actions/gameActions'
import PropTypes from 'prop-types'
import userSelector from '../selectors/userSelector'

const mapDispatchToProps = dispatch => {
  return {
    loadUser: user => dispatch(actions.getUserFetch(user)),
  }
}

const mapStateToProps = state => {
  return {
    user: userSelector(state)
  }
}

const ProfileContainer = ({...props}) => {
  return <ProfileView
    loadUser={props.loadUser}
    user={props.user}
  />
}

ProfileContainer.propTypes = {
  loadUser: PropTypes.func,
  user: PropTypes.object
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

