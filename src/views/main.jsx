import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'

const MainView = () => {
  return (
    <div className='contenedorMainView'>
      <div className='p-5 text-center bg-image'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100' id='sectionTitle'>
            <div className='text-white'>
              <h3 className='mb-3'>Bienvenido a</h3>
              <h1 className='mb-3'>Global Stats</h1>
              <br></br>
              <Link
                className='btn btn-outline-danger'
                role='button'
                id='loginButton'
                to='/login'>Ingresar
              </Link>
              <Link
                className='btn btn-outline-danger'
                role='button'
                id='signupButton'
                to='/signup'>Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainView
