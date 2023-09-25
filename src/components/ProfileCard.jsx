import React from 'react'
import Cover from '../img/cover.jpg'
import Profile from '../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    const ProfilePage = true;
    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={Cover} alt='' />
                <img src={Profile} alt='' />
            </div>
            <div className='ProfileName'>
                <span>Ravi Shankar</span>
                <span>UI/UX Developer</span>
            </div>
            
                <div className='followStatus'>
                    <hr></hr>
                    <div>
                    <div className='follow'>
                        <span>7015</span>
                        <span>Followings</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>

                        <span>1</span>
                        <span>Followers</span>
                    </div>

                    {ProfilePage && (
                        <>
                        <div className='vl'></div>
                        <div className='follow'>
                            <span>3</span>
                            <span>Posts</span>

                        </div>
                        </>
                    )}
                    </div>
                    <hr></hr>
            </div>
            {ProfilePage ? "": <span>My Profile</span>}

        </div>
    )
}

export default ProfileCard