import React from 'react'
import PropTypes from 'prop-types'
import LoginView from '../views/login'
import { connect } from 'react-redux'
import userSelector from '../selectors/userSelector'
import { useNavigate } from 'react-router-dom'
import actions from '../actions/userActions'

const mapDispatchToProps = dispatch => {
  const navigate = useNavigate()
  return {
    loginUser: values => dispatch({...actions.getUserFetch(values), navigate}),
  }
}

const mapStateToProps = state => {
  return {
    user: userSelector(state),
  }
}

const LoginContainer = ({...props}) => {
  return <LoginView
    loginUser={props.loginUser}
    user={props.user}
  />
}

LoginContainer.propTypes = {
  user: PropTypes.object,
  loginUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
