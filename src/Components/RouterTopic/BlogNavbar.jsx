import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Routers.css';
import { useAuth } from './Auth';


const BlogNavbar = () => {
  const auth = useAuth()
    
  return (
    <div className='nav-container'>
      <h2> welcome to our Blog's </h2> <hr/>
        <Link to='/' >BlogHome</Link>
        <Link to='/login'> Profile </Link>
        {
          !auth.user && (
            <NavLink to='/login'>login </NavLink>
          )
        }

      
    </div>
  )
}

export default BlogNavbar
