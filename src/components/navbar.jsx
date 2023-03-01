import React, { useState } from 'react'
import * as CgIcons from 'react-icons/cg'
import { FaHome, FaUserFriends, FaUserCircle, FaSearch, FaBars, FaRegWindowClose } from 'react-icons/fa'
import { MdLogout, MdBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import PropTypes from 'prop-types'
import { Cookies } from '../auth/cookies/cookie'


function Navbar({ ...props }) {
  const [sidebar, setSidebar] = useState(false)
  const [isFriendsSelected, setIsFriendsSelected] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const showFriends = () => setIsFriendsSelected(!isFriendsSelected)
  const logout = () => {
    Cookies.set('jwt', '')
    Cookies.set('user', '')
  }
  const elements = () => {
    return (
      <>
        <h2 className='text-uppercase item-link item-link--'>Global Stats</h2>
        <section className="navbar-item">
          <FaUserCircle />
          {
            props?.user.type == 1 ?
              <Link to={'/admin'} className='text-decoration-none item-link'>
                Admin
                <span className="item-link-one"></span>
              </Link>
              : <></>
          }
        </section>
        <section className='navbar-item'>
          <FaHome />
          <Link className='text-decoration-none item-link' to='/prelanding' onClick={showSidebar}>
            Home
            <span className="item-link-one"></span>
          </Link>
        </section>
        <section className='navbar-item'>
          <FaSearch />
          <Link className='text-decoration-none item-link' to='search' onClick={showSidebar}>
            Search
            <span className="item-link-one"></span>
          </Link>
        </section>
        <section className='navbar-item'>
          <FaUserCircle />
          <Link className='text-decoration-none item-link' to={'profile/' + props.user.id} onClick={showSidebar}>
            Profile
            <span className="item-link-one"></span>
          </Link>
        </section>
        <section className='navbar-item'>
          <FaUserFriends />
          <Link className='text-decoration-none item-link' to='search' onClick={showFriends}>
            Friends
            <span className="item-link-one"></span>

          </Link>
        </section>

      </>
    )
  }

  const getFriends = () => {
    const friends = [
      <section className="navbar-item" key={'id-back'}>
        <MdBackspace />
        <Link to='search' className='text-decoration-none item-link' onClick={showFriends}>
          Back
        </Link>
      </section>
    ]

    props.user.friends.forEach(friend => {
      friends.push(
        <section className='navbar-item' key={friend.id}>
          <CgIcons.CgProfile />
          <Link to={'chat/' + friend.id} className='text-decoration-none item-link'>
            {friend.name}
          </Link>
        </section>
      )
    })

    return friends
  }

  return (
    <div className='NavbarContainer'>
      {/* Navbar */}
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaBars onClick={showSidebar} />
        </Link>
        <div className='topSection'>
          <Link to='login' onClick={logout}>
            <MdLogout className='iconColorDefault' />
          </Link>
        </div>
      </div>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <Link to='#' className='menu-bars text-decoration-none item-link' onClick={showSidebar}>
          <FaRegWindowClose />
        </Link>
        {isFriendsSelected ? getFriends() : elements()}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  user: PropTypes.object,
  onFriendSelected: PropTypes.func,
}

export default Navbar
