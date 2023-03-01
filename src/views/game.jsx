import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/game.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useNavigate } from 'react-router-dom'


const GameView = ({ ...props }) => {
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    props.loadGame(params.id)
    document.getElementById('circle').hidden = false
    document.getElementById('details').hidden = true
  }, [])

  if(props.game.id!==0){
    document.getElementById('circle').hidden = true
    document.getElementById('details').hidden = false
  }

  const showStoryline = () => {
    document.getElementById('historia').hidden = false
    document.getElementById('resumen').hidden = true
    document.getElementById('botonHistoria').style.backgroundColor = 'rgba(0,0,0,0.7)'
    document.getElementById('botonResumen').style.backgroundColor = 'rgba(0,0,0,0)'
  }

  const showSummary = () => {
    document.getElementById('historia').hidden = true
    document.getElementById('resumen').hidden = false
    document.getElementById('botonHistoria').style.backgroundColor = 'rgba(0,0,0,0)'
    document.getElementById('botonResumen').style.backgroundColor = 'rgba(0,0,0,0.7)'
  }

  const goToSearch = () => {
    navigate('/search')
  }

  return (
    <div>
      <div className='gameSection'>
        <section className='circleLoad' id='circle' hidden='True'>
          <div className='circle'></div>
        </section>
        <section className='details' id='details'>
          <div className='contenedor'>
            <button className='btn btn-outline-danger btn-lg' onClick={goToSearch}>
              Volver al listado
            </button>
            <div className='row'>
              <div className='col-lg-3'>
                <img className='gameImage' src={props.game.imageUrl} />
              </div>
              <div className='col-lg-9'>
                <div className='title'>
                  <h1>{props.game.name}</h1>
                </div>
                <div className='backspecs'>
                  <div className='specs'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6' id='itemsLi'>
                        <ul>
                          <li>
                            <span>Lanzamiento:</span> {props.game.releaseDate}
                          </li>
                          <li>
                            <span>Clasificacion:</span> {props.game.rating}
                          </li>
                          <li>
                            <span>Fuente de Clasificacion:</span>{" "}
                            {props.game.ratingSource}
                          </li>
                          <li>
                            <span>Generos:</span> {props.game.genres.join(', ')}
                          </li>
                        </ul>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='ratingBar'>
                          <CircularProgressbar id='circleBar' value={props.game.totalRating.toFixed(0)} text={props.game.totalRating.toFixed(0) + '%'} />
                          <h5>Puntaje</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='storyOrSummary'>
                  <button
                    id='botonResumen'
                    className='btn btn-outline-primary btn-lg'
                    onClick={showSummary}
                  >
                    Resumen
                  </button>
                  <button
                    id='botonHistoria'
                    className='btn btn-outline-primary btn-lg'
                    onClick={showStoryline}
                  >
                    Historia
                  </button>
                </div>
                <div className='rate'>
                  <button className='btn btn-success btn-lg'>Like</button>
                  <button className='btn btn-danger btn-lg'>Dislike</button>
                </div>
              </div>
            </div>
            <div className='descripcion' id='resumen'>
              <p>{props.game.summary}</p>
            </div>
            <div className='descripcion' id='historia' hidden>
              <p>{props.game.storyline}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

GameView.propTypes = {
  loadGame: PropTypes.func,
  game: PropTypes.object,
}

export default GameView
