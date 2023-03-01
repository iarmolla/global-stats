import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/error.css'

const Error = (() => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 error">
      <div className="text-center">
        <h1 className="display-1 fw-bold ">404</h1>
        <p className="fs-3"> <span className="text-danger">Opps!</span> Pagina no encontrada</p>
        <p className="lead">
          La pagina que estas buscando no existe
        </p>
        <Link to={'/login'} className="btn btn-dark">Inicio</Link>
      </div>
    </div>
  )
})

export default Error