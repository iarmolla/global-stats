import React from 'react'
import PropTypes from 'prop-types'
import SignupView from '../views/signup'
import { connect } from 'react-redux'
import actions from '../actions/userActions'
import signupResponseSelector from '../selectors/signupMessageSelector'

const mapDispatchToProps = dispatch => {
  return {
    signupUser: user => dispatch(actions.getSignup(user)),
  }
}

const mapStateToProps = state => {
  return {
    signupResponse: signupResponseSelector(state)
  }
}

const SignupContainer = ({...props}) => {
  return <SignupView 
    signupUser={props.signupUser}
    signupResponse={props.signupResponse}
  />
}

SignupContainer.propTypes = {
  signupUser: PropTypes.func,
  signupResponse: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)