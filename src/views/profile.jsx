import React,{useEffect} from 'react'
import 'boxicons'
import '../styles/profile.css'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const ProfileView = ({...props}) => {
  const params = useParams()
  let csgoStats = ''
  let dv2Stats = ''
  let apexStats = ''

  useEffect(() => {
    props.loadUser(params.id)
  },[])

  if (props.user.track) {
    const track = props.user.track[0]
    apexStats = track ? track[1] : null
    csgoStats = track ? track[2] : null
    dv2Stats = track ? track[3] : null
  }

  return (
    <div className="profile">
      <div className="container__profile"></div>
      <section className="profile-card profile__card">
        <div className="ml-5 card-section">
          <img
            src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/03/Serie-live-action-de-God-of-War-podri%CC%81a-llegar-a-Amazon-Prime-Video.jpg?fit=1280%2C720&quality=80&ssl=1"
            alt=""
            className="profile__image"
          />
          <span className="profile__user">{props.user.username}</span>
        </div>
      </section>
    
      <div className='cardsGamesStats'>
        <div className="card" style={{ width: '300px' }}>
          <img className="card-img-top" src="https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">CS Global Offensive Stats</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Kills: {csgoStats?.kills}</li>
            <li className="list-group-item">Deaths: {csgoStats?.deaths}</li>
            <li className="list-group-item">Time Played: {csgoStats?.timePlayed}</li>
          </ul>
        </div>

        <div className="card" style={{ width: '300px' }}>
          <img className="card-img-top" src="https://www.dafont.com/forum/attach/orig/8/5/853990.png?1" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Apex Legends Stats</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Kills: {apexStats?.kills}</li>
            <li className="list-group-item">Deaths: </li>
            <li className="list-group-item">Time Played: {apexStats?.timePlayed}</li>
          </ul>
        </div>

        <div className="card" style={{ width: '300px' }}>
          <img className="card-img-top" src="https://play-lh.googleusercontent.com/u70XZAWIrwAMMTEGsD5yPL80e9gv088ekVRy1PhtjHR9541IA-0mjc4m6n90hwJ_ww" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">The Division 2 Stats</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Kills: {dv2Stats?.kills}</li>
            <li className="list-group-item">Deaths: </li>
            <li className="list-group-item">Time Played: {dv2Stats?.timePlayed}</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-5 p-1">
        <footer className="p-2">
          <ul className="nav justify-content-center border-bottom">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© 2022 Global Stats, Inc</p>
        </footer>
      </div>
    </div>
  )
}

ProfileView.propTypes = {
  loadUser: PropTypes.any,
  user: PropTypes.object
}
export default ProfileView;
