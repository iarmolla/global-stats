import React from 'react'
import Navbar from '../components/navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import userSelector from '../selectors/userSelector'
import actions from '../actions/navbarActions'
import { useEffect } from 'react'

const mapDispatchToProps = dispatch => {
  return {
    initialize: () => dispatch(actions.initialize()),
    onFriendSelected: (id) => dispatch(actions.onFriendSelected(id)),
  }
}

const mapStateToProps = state => {
  return {
    user: userSelector(state),
  }
}

const NavbarContainer = ({...props}) => {
  useEffect(() => {
    props.initialize()
  }, [])

  return <Navbar
    user={props.user}
    onFriendSelected={props.onFriendSelected}
  />
}

NavbarContainer.propTypes = {
  user: PropTypes.object,
  initialize: PropTypes.func,
  onFriendSelected: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)