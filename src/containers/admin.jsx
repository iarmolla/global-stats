import React from 'react'
import Admin from '../views/admin'
import actions from '../actions/userActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import adminSelector from '../selectors/adminSelector'

const mapDispatchToProps = dispatch => {
  return {
    loadUser: id => dispatch(actions.getBanUser(id)),
    banUser: id => dispatch(actions.banUser(id))
  }
}

const mapStateToProps = state => {
  return {
    user: adminSelector(state)
  }
}

const AdminContainer = ({...props}) => {
  return <Admin
    loadUser = {props.loadUser}
    user = {props.user}
    banUser = {props.banUser}
  />
}

AdminContainer.propTypes = {
  loadUser: PropTypes.func,
  user: PropTypes.object,
  banUser: PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
