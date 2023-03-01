import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import './login.css'

const LoginView = (props) => {
  return (
    <div className="container">
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          let errors = {}
          if (!values.username) {
            errors.username = "*El nombre de usuario es requerido*"
          }
          if (!values.password) {
            errors.password = '*La contraseña es requerida*'
          }
          return errors
        }}
        onSubmit={(values) => {
          props.loginUser(values)
        }}
      >
        {({ handleSubmit,
          errors,
          values,
          handleChange,
          handleBlur,
          touched }) => (
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">Global Stats</h2>
            <p className="form__paragraph">¿No tienes cuenta? <Link to="/signup" className="form__link">entra aqui</Link></p>
            <div className='form__container'>
              <div className="form__group">
                <input type="text" placeholder=' ' id="username" className="form__input" autoComplete='off' value={values.username} onChange={handleChange} onBlur={handleBlur} />
                <label className='form__label' htmlFor="username">usuario</label>
                {touched.username && errors.username &&
                  <label className="form__error">{errors.username}</label>
                }
              </div>
              <div className="form__group">
                <input className="form__input" id="password" type="password" placeholder=' ' autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                <label className='form__label' htmlFor='password'>contraseña</label>
                {touched.password && errors.password &&
                  <label className="form__error">{errors.password}</label>
                }
              </div>
              <div className="form__group">
                <button className="form__submit">aceptar</button>
              </div>            
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

LoginView.propTypes = {
  user: PropTypes.object,
  loginUser: PropTypes.func
}

export default LoginView
