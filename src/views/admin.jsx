import React, { useState, useEffect } from 'react'
import 'boxicons'
import '../styles/admin.css'
import PropTypes from 'prop-types'

const Admin = ({ ...props }) => {
  const [user, setUser] = useState(7)
  const getUser = () => {
    props.loadUser(user)
  }
  useEffect(() => {
    props.loadUser(user)
  }, [])
  return (
    <div className="search__container">
      <div className="search-container search-container--">
        <div>
          <h1 className="search-title">Administrador</h1>
          <p className="search-text">Lista de usuarios</p>
        </div>
        <div className="container-item">
          <input
            placeholder="Ingresar usuario"
            className="item-search item-search--"
            onChange={(e) => {
              setUser(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter" && user >= 0) {
                getUser()
              }
            }}
          />
          <box-icon
            name="search-alt-2"
            onClick={() => {
              getUser()
            }}
          ></box-icon>
        </div>
      </div>
      <section >
        <h2 className="text-light text-light--">Listado</h2>
        <p className="line"></p>
      </section>
      <div className="grid-gallery grid-gallery--" id="details">
        <main className="gallery">
          <table className="table gallery-table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Rol</th>
                <th scope="col">Email</th>
                <th scope="col">Nombre de usuario</th>
                <th scope="col">Baneos</th>
                <th scope="col">Refrescar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{props?.user?.id}</th>
                <th scope="row">
                  {
                    props?.user?.type == 1 ? 'Administrador' : 'Usuario'
                  }
                </th>
                <td>{props?.user?.email}</td>
                <td>{props?.user?.username}</td>
                <td>
                  {
                    props?.user?.isBanned ? <button className="btn btn-success" onClick={() => {
                      if (user >= 0) {
                        props.banUser(props?.user?.id)
                      }
                    }}>Desbanear</button> : <button className='btn btn-danger' onClick={() => {
                      if (user >= 0) {
                        props.banUser(props?.user?.id)
                      }
                    }}>Banear</button>
                  }
                </td>
                <td>
                  <button className='btn btn-secondary text-white' onClick={() => {
                    if (user >= 0) {
                      props?.loadUser(user)
                    }
                  }}>Actualizar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}
Admin.propTypes = {
  user: PropTypes.object,
  loadUser: PropTypes.func,
  banUser: PropTypes.func
}

export default Admin