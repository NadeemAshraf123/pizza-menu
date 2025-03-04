import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Routers.css'
import LogoPage from './LogoPage'

const Home = () => {
   const x =  useNavigate()
  return (
    <div className='home'>
      <h1>home page</h1>
      <button onClick={()=>x('/logopage')} style={{margin:'20px' , backgroundColor:'lightblue'}}>go back to previous page</button>
      <button onClick={()=>x(1)} style={{margin:'20px' , backgroundColor:'lightblue'}}> go forward next page  </button>

    </div>
  )
}

export default Home
