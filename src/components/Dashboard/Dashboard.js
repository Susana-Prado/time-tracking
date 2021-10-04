import React, { useState } from 'react'
import Detail from '../Detail/Detail'
import Profile from '../Profile/Profile'
import './Dashboard.css'

export default function Dashboard() {
    const [preference, setPreference] = useState('weekly');

    const changePreference = (e) => {
        setPreference('e.target.id')
    }
    return (
        <div className="dashboard">
            <Profile changePreference={changePreference} preference={preference} />
            <Detail />
        </div>
    )
}
