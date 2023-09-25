import React, {useState} from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className='InfoCard'>
      <div className='infoHead'>
        <h4>Your Info </h4>
        <div>
          <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
          <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
      </div>
      <div className='info'>
        <b> <span>Status </span></b>
        <span>in Relationship</span>
      </div>
      <div className='info'>
        <b><span>Lives in </span></b>
        <span>Kathmandu</span>
      </div>

      <div className='info'>
        <b> <span>Works at </span></b>
        <span>Coding Technology</span>
      </div>
      <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard