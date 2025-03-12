import React from 'react'
import './Routers.css'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handlelogout = ()=>{
        auth.logout();
        navigate('/');
    };
return (
    <div>
      <h2> Welcome: {auth.user} to our blog site</h2>
      <h2> if you are blog lover than you are on right place and this site will evaluate your time </h2>
      <button onClick={handlelogout} >Logout</button>
    </div>
)}
export default Profile