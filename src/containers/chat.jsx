import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Chat from '../views/chat'
import actions from '../actions/chatActions'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import chatSelector from '../selectors/chatSelector'
import userSelector from '../selectors/userSelector'

let params = null

const mapDispatchToProps = dispatch => {
  return {
    initialize: () => dispatch(actions.initialize(params.id)),
  }
}

const mapStateToProps = state => {
  return {
    chat: chatSelector(state),
    user: userSelector(state)
  }
}

const ChatContainer = ({...props}) => {
  params = useParams()
  useEffect(() => {
    props.initialize()
  }, [])

  if (!props.chat.isReady) {
    return null
  }

  return <Chat
    user={props.user}
    chat={props.chat}
  />
}

ChatContainer.propTypes = {
  user: PropTypes.object,
  chat: PropTypes.object,
  initialize: PropTypes.func,
  isReady: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
