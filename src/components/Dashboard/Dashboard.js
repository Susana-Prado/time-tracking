import React from 'react'
import Detail from '../Detail/Detail'
import Profile from '../Profile/Profile'
import './Dashboard.css'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Profile />
            <Detail />
        </div>
    )
}
