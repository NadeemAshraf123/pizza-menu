import React from 'react'
import { Link } from 'react-router-dom'
import './Routers.css';


const BlogNavbar = () => {
    
  return (
    <div className='nav-container'>
      <h2> welcome to our Blog's </h2> <hr/>
        <Link to='/' >BlogHome</Link>
        <Link to='profile'> Profile </Link>
      
    </div>
  )
}

export default BlogNavbar
