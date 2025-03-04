import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const Enigmatix = () => {
  return (
    <div>
      <h1> Enigmatix Software House Bahawalpur </h1>
      
      <Link to='frontend' style={{padding:'50px' }}> FrontendDeveloper </Link>
      <Link to='backend'  style={{padding:'50px' }}> BackendDeveloper </Link>
      <Link to='game'     style={{padding:'50px' }}> GameDeveloper    </Link>
      <Link to='flutter'>  FlutterDeveloper </Link>

      <Outlet />
    </div>
  )
}

export default Enigmatix
