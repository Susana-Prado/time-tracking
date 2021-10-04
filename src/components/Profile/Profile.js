import React from 'react'
import './Profile.css'
import profile from '../../images/image-jeremy.png'

export default function Profile() {
  

    return (
        <div className="full-profile">
            <div className="profile-card">
                <img src={profile} alt="jeremy"></img>
                <h5>Report for</h5>
                <h2>Jeremy Robson</h2>
            </div>
            <div className="preferences">
                <h5 id="daily">Daily</h5>
                <h5 id="weekly">Weekly</h5>
                <h5 id="monthly">Monthly</h5>
            </div>
        </div>
    )
}
