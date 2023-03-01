import React,{useState}  from 'react'
import './prelanding.css'
import MyVerticallyCenteredModal from './modalPrelanding'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrelandingView = ({...props}) => {
  const [modalShow, setModalShow] =useState(false)
  const navigate = useNavigate()

  const goToSearch = () => {
    navigate('/search')
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand text-light navbar-title'>GLOBAL STATS</a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon navbar-toggler-icon-modified'></span>
          </button>
        </div>
      </nav>      
      <div
        id='carouselExampleDark'
        className='carousel slide carousel-container'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval='10000'>
            <img
              src='https://images3.alphacoders.com/118/1184703.jpg'
              className='d-block w-100 carousel-image'
              id='imgCarousel'
            />
            <div className='carousel-caption d-md-block carousel-group'>
              <button className='btn btn-dark w-50' onClick={()=>{
                setModalShow(true)
              }}>TRACKER</button>
            </div>
          </div>
          <div className='carousel-item' data-bs-interval='2000'>
            <img
              src='https://wallpaper.dog/large/10873456.jpg'
              className='d-block w-100'
              id='imgCarousel'
            />
            <div className='carousel-caption  d-md-block carousel-group'>              
              <div>
                <p className='carousel-paragraph'></p>
              </div>
              <button className='btn btn-dark w-50 ' onClick={()=>{
                setModalShow(true)
              }}>
                TRACKER
              </button>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://images6.alphacoders.com/929/thumb-1920-929023.jpg'
              className='d-block w-100 '
              id='imgCarousel'
            />
            <div className='carousel-caption  d-md-block carousel-container '>
              <div>
                <p className='carousel-paragraph text-light'></p>
              </div>
              <button className='btn btn-dark w-50' onClick={()=>{
                setModalShow(true)
              }}>TRACKER</button>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true '
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <button type='button' className='btn btn-primary btn-lg' id='skipButton' onClick={goToSearch}>Continuar</button>      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        trackGame={props.trackGame}
        user={props.user}
      />
    </div> 
  )
}

PrelandingView.propTypes = {
  trackGame: PropTypes.func,
  user: PropTypes.object
}

export default PrelandingView
