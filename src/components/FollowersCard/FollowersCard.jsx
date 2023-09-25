import React from 'react'
import {Followers} from '../../Data/FollowersData'
import './FollowersCard.css'
const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
        <h3>Who is Following You!</h3>

        {Followers.map((follower, id)=>{
            return(
                <div className='follower'>
                    <div>
                        <img src={follower.img} alt="" className='followerImg' />
                        <div className='name'>
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>

                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard