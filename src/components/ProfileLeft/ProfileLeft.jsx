import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className='profileSide'>
        <LogoSearch />
        <InfoCard />
        <FollowersCard />

    </div>
  )
}

export default ProfileLeft