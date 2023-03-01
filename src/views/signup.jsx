import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import strengthChecker from '../helpers/password'
import emailChecker from '../helpers/email'
import fieldsEmptyChecker from '../helpers/formFields'
import '../styles/signup.css'

const SignupView = ({ ...props }) => {
  const [formData, setFormData] = useState({})

  const buildMessage = () => {
    if (props.signupResponse?.errorCode) {
      return props.signupResponse.message
    }
    if (props.signupResponse?.errorCode === 0) {
      alert('Usuario Registrado con éxito!')
      const navigate = useNavigate()
      navigate('/login')
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!fieldsEmptyChecker(formData)) {
      alert('Hay campos vacíos en el formulario.')
      return
    }
    if (!emailChecker(formData.email)) {
      alert('Verifica la estructura del correo electrónico.')
      return
    }
    if (!strengthChecker(formData.password)) {
      alert(
        'La contraseña debe contener al menos: \n - Una Mayúscula. \n - Una Minúscula. \n - Un número. \n - Un Carácter especial. \n - Mínimo 8 caracteres.'
      )
      document.getElementById('passwordInput').value = ''
      return
    }
    props.signupUser(formData)
  }

  return (
    <div className='contenedorSignup'>
      <div className='d-flex justify-content-center' id='formBox'>
        <div className='formSignup'>
          <form onSubmit={handleSubmit}>
            <h2>Registro</h2>

            <label>Nombre</label>
            <input
              className='form-control'
              type='text'
              name='firstName'
              value={formData.firstName || ''}
              onChange={handleChange}
              required
            />

            <label>Apellido</label>
            <input
              className='form-control'
              type='text'
              name='lastName'
              value={formData.lastName || ''}
              onChange={handleChange}
              required
            />

            <label>Nombre de Usuario</label>
            <input
              className='form-control'
              type='text'
              name='username'
              value={formData.username || ''}
              onChange={handleChange}
              required
            />

            <label>Correo Electronico</label>
            <input
              className='form-control'
              type='email'
              name='email'
              value={formData.email || ''}
              onChange={handleChange}
              required
            />

            <label>Contraseña</label>
            <input
              className='form-control'
              type='password'
              name='password'
              id='passwordInput'
              value={formData.password || ''}
              onChange={handleChange}
              required
            />
            <br />

            <div className='signupMessage'>
              <strong id='message'>{buildMessage()}</strong>
            </div>
            <br />

            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-danger'>
                Registrarse
              </button>
            </div>
            <br />

            <div id='linkToLogin'>
              <Link className='link-danger' to='/login'>Ya tengo una cuenta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

SignupView.propTypes = {
  signupUser: PropTypes.func,
  signupResponse: PropTypes.object,
}

export default SignupView
