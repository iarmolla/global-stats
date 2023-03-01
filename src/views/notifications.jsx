import React from 'react'
import '../styles/notifications.css'
import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'

const NotificationsView = () => {
  return (
    <div className="notifBackground">
      <div className="notifContainer">
        <div>
          
          {dataNotif.map((item,index) => {
            return(
              <div key={index} className='itemNotif'>
                <span><FaIcons.FaCircle id='iconDot'/>{item.message}</span><span className='rightSpanNotif'>{item.date}<HiIcons.HiDotsHorizontal id='optionNotif'/></span>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

const dataNotif = [
  {
    message: 'Juanito quiere agregarte como contacto.',
    date: '2/11'
  },
  {
    message: 'Pedro quiere agregarte como contacto.',
    date: '2/11'
  },
  {
    message: 'Maria le ha dado me gusta a tu perfil.',
    date: '1/11'
  },
  {
    message: 'Juanito quiere agregarte como contacto.',
    date: '2/11'
  },
  {
    message: 'Pedro quiere agregarte como contacto.',
    date: '2/11'
  },
  {
    message: 'Maria le ha dado me gusta a tu perfil.',
    date: '1/11'
  },
]

export default NotificationsView
