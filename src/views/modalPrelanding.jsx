import Modal from 'react-bootstrap/Modal'
import {React,useEffect} from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function MyVerticallyCenteredModal({...props}) {
  const [trackerData, setTrackerData] = useState({})
  
  useEffect(() => {
    setTrackerData((values) => ({ ...values, 'userId': props.user.id }))
  }, [])
  
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setTrackerData((values) => ({ ...values, [name]: value }))
    platformsOptions(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.trackGame(trackerData)
  }

  const platformsOptions = (gameSelected) => {
    if(gameSelected==1){
      document.getElementById('platformSelect').innerHTML = `<option>Select your platform</option>
                                                             <option value='3'>Origin</option>
                                                             <option value='2'>Xbox Live</option>
                                                             <option value='4'>PS Network</option>`
    }
    if(gameSelected==2){
      document.getElementById('platformSelect').innerHTML = `<option>Select your platform</option>
                                                             <option value='1'>Steam</option>`
    }
    if(gameSelected==3){
      document.getElementById('platformSelect').innerHTML = `<option>Select your platform</option>
                                                             <option value='5'>Uplay</option>
                                                             <option value='2'>Xbox Live</option>
                                                             <option value='4'>PS Network</option>`
    }
  }

  return (
    <Modal
      {...props}
      size='sl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Trackear</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='inputData'>
          <form onSubmit={handleSubmit}>
            <select className='selectModalPrelanding' value={trackerData.game || ''} onChange={handleChange} name='game'>
              <option>Select your game</option>
              <option value='1'>Apex Legends</option>
              <option value='2'>CS: Global Offensive</option>
              <option value='3'>The Division 2</option>
            </select>
            <br></br>
            <select className='selectModalPrelanding' value={trackerData.platform || ''} onChange={handleChange} name='platform' id='platformSelect'>
            </select>
            <br></br>
            <input placeholder='Enter your username' className='inputModalPrelanding' value={trackerData.userTag || ''} onChange={handleChange} name='userTag'></input>
            <br></br><br></br>
            <button type='submit' className='btn btn-dark'>
              Trackear
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  )
}

MyVerticallyCenteredModal.propTypes = {
  onHide: PropTypes.func,
  trackGame: PropTypes.func,
  user: PropTypes.object
}

export default MyVerticallyCenteredModal
