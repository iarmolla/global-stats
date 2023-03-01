import React, { useState, useEffect } from 'react'
import '../styles/chat.css'
import io from 'socket.io-client'
import { APIBaseUrl } from '../helpers/urls'
import scrollElement from '../helpers/scroller'

const socket = io(APIBaseUrl)

const chat = ({...props}) => {
  useEffect(() => {
    const scrollingChat = document.getElementsByClassName('chat-user-text')[0]
    return scrollElement(scrollingChat)
  }, [])

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(props.chat.messages)
  const scrollingChat = document.getElementsByClassName('chat-user-text')[0]

  useEffect(() => {
    const receiveMessage = (message) => {
      const receivedMessage = message
      setMessages([...messages, receivedMessage])
    }
    const chat = props.chat
    const chatId = chat.originalChatId > 0 ? chat.originalChatId : chat.id
    socket.on(`receiveMessage_${chatId}`, receiveMessage)
    scrollElement(scrollingChat)
  }, [messages])

  const handleSubmit = ((e) => {
    e.preventDefault()
    const newMessage = {
      chatId: props.chat.id,
      senderId: props.user.id,
      message,
      originalChatId: props.chat.originalChatId,
    }

    scrollElement(scrollingChat)
    socket.emit('sendMessage', newMessage)
    setMessage('')
  })

  return (
    <>
      <div className="container-chat">
        <form onSubmit={(e) => handleSubmit(e)}>
          <section className="container-section">
            <div className="container-title">
              <input
                type="search"
                placeholder="search"
                className="chat-search"
              />
              <div className="row">
                <div>
                  <h6 className="container-item--">Amigos</h6>
                </div>
                <div className="contact">
                  <div className="">
                    <h5 className="contact-item">Sadosky</h5>
                  </div>
                  <div className="">
                    <h5 className="contact-item">Sadosky</h5>
                  </div>
                  <div className="">
                    <h5 className="contact-item">Sadosky</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100">
              <p className="chat-title-user">Sadosky</p>
              <div className="chat-user-text">
                <div className="section">
                  {
                    messages.map(item => {
                      if (item.senderId === props.user.id) {
                        return (
                          <div key={item.id} className='user-text'>
                            <p className='text-button-user text-button-user--'>{item?.message}</p>
                          </div>
                        )
                      } else {
                        return (
                          <div key={item.id} className='section-user-text'>
                            <button className='text-button-user'>{item?.message}</button>
                          </div>
                        )
                      }
                    })
                  }
                </div>
              </div>
              <footer className="footer-chat">
                <input
                  onChange={((e) => setMessage(e.target.value))}
                  value={`${message != '' ? message : ''}`}
                  className="chat-footer w-100"
                  type="text"
                  placeholder="send"
                />
                <box-icon name='send' color='#ffffff' onClick={(e) => handleSubmit(e)}></box-icon>
              </footer>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default chat;
