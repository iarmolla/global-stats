import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import 'boxicons'
import '../styles/searchGameView.css'
import { Link } from 'react-router-dom'

const SearchGameView = ({ ...props }) => {
  let games = []
  games = Object.values(props.games)
  useEffect(() => {    
    if(games.length<=0){
      document.getElementById("circle").hidden = false
      document.getElementById("details").hidden =false
    }    
    props.searchGame('halo')
  }, [])
  const imageNotFound =
    "https://yt3.ggpht.com/Yu1-YFIvdU5t_II7j4uYIyA5_EDF3DdOzFoI-UiNRwDtWXZP0zMYL-wuJe4r2APE6Q2yds3a0w=s540-w390-h540-c-k-c0x00ffffff-no-nd-rj"
  const [search, updateSearch] = useState("")

  const onLoadHtml = () => {
    if (games.length > 0) {   
      document.getElementById("circle").hidden = true
      document.getElementById("details").hidden = false
    }
  }

  return (
    <div className="search__container" onLoad={onLoadHtml}>
      <div className="search-container">
        <div className='container-titles'>
          <h1 className="search-title">encuentra tu juego</h1>
          <p className="search-text">Detalle completo puntaje y mas</p>
        </div>
        <div className="container-item">
          <input
            placeholder="Busca tu juego"
            className="item-search"
            onChange={(e) => {
              updateSearch(e.target.value)
            }}
            onKeyUp={
              (e)=>{
                if(e.key=='Enter'){
                  document.getElementById("circle").hidden = false
                  document.getElementById("details").hidden = true
                  props.searchGame(search)
                  window.scrollTo(0, 480)
                }
              }
            }
          />
          <box-icon
            name="search-alt-2"
            onClick={() => {
              document.getElementById("circle").hidden = false
              document.getElementById("details").hidden = true
              props.searchGame(search)
              window.scrollTo(0, 480)
            }}
          ></box-icon>
        </div>
      </div>
      <section >
        <h2 className="text-light m-5">Resultados</h2>
      </section>
      <div className="grid-container">
        <div className="grid-gallery" id="details">
          {games.map((e) => {
            return (
              <main className="gallery" key={e.id}>
                <Card
                  style={{
                    background: "#212529",
                    color: "#fff",
                  }}
                  className="card-game"
                >
                  {e.imageUrl == "" ? (
                    <Card.Img src={imageNotFound} />
                  ) : (
                    <Card.Img src={e.imageUrl} />
                  )}
                  <Card.Body className="row justify-content-center m-2 gap-2">
                    <Card.Title className="ellipsis-card">{e.name}</Card.Title>
                    <Link
                      to={`/games/${e.id}`}
                      className="btn btn-danger rounded-1"
                    >
                      <b>Ver mas</b>
                    </Link>
                  </Card.Body>
                </Card>
              </main>
            );
          })}
        </div>
      </div>
      <section className="circleLoad" id="circle" hidden="True">
        <div className="circle"></div>
      </section>
    </div>
  );
};
SearchGameView.propTypes = {
  searchGame: PropTypes.func,
  games: PropTypes.any,
};
export default SearchGameView
