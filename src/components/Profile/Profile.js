import React from 'react'
import './Profile.css'
import profile from '../../images/image-jeremy.png'

export default function Profile({changePreference, preference}) {
  

    return (
        <div className="full-profile">
            <div className="profile-card">
                <img src={profile} alt="jeremy"></img>
                <h5>Report for</h5>
                <h2>Jeremy Robson</h2>
            </div>
            <div className="preferences">
                <h5 id="daily" onClick={changePreference}>Daily</h5>
                <h5 id="weekly" onClick={changePreference}>Weekly</h5>
                <h5 id="monthly" onClick={changePreference}>Monthly</h5>
            </div>
        </div>
    )
}
