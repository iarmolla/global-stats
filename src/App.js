import React from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import LoginContainer from './containers/login.jsx'
import SignupContainer from './containers/signup.jsx'
import MainView from './views/main'
import GameContainer from './containers/game'
import PreladingContainer from './containers/prelanding.jsx'
import SearchGameContainer from './containers/searchGame.jsx'
import ProfileContainer from './containers/profile'
import ChatContainer from './containers/chat'
import NavbarContainer from './containers/navbar'
import NotificationsView from './views/notifications'
import AdminContainer from './containers/admin'
import { Cookies } from './auth/cookies/cookie'
import ErrorContainer from './containers/error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<MainView />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/signup' element={<SignupContainer />} />
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/prelanding' element={<PreladingContainer />} />
          <Route path='/' element={<LayoutsWithNavbar />}>
            <Route path='/chat/:id' element={<ChatContainer />} />
            <Route path='/games/:id' element={<GameContainer />} />
            <Route path='/search' element={<SearchGameContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />} />
            <Route path='/notifications' element={<NotificationsView />}/>
            <Route path='/admin' element={<AdminContainer/>}></Route>
          </Route>
        </Route>
        <Route path='*' element={<ErrorContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )

  function LayoutsWithNavbar() {
    return (
      <>
        <NavbarContainer />
        <Outlet /> 
      </>
    )
  }

  function ProtectedRoutes() {
    const jwt = Cookies.get('jwt')
    if (!jwt) {
      window.location.href = 'login'
    }

    return (
      <>
        <Outlet />
      </>
    )
  }

}

export default App
